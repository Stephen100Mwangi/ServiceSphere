/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";
import { SiDwavesystems } from "react-icons/si";
import { IoIosSend } from "react-icons/io";
import { formatDistanceToNow, format } from "date-fns";
import { io } from "socket.io-client";
import { useRef } from "react";
import { jwtDecode } from "jwt-decode";

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [friendId, setFriendId] = useState("");
  const [friendName, setFriendName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  // These are the users active on the socket - Initially empty
  const [onlineUsers, setOnlineUsers] = useState([]);

  // Socket.io
  const socketRef = useRef(null);

  // Check JWT Token and Authenticate
  useEffect(() => {
    const checkTokenValidity = () => {
      const token = localStorage.getItem("serviceToken");

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        // Decode the token
        const decodedToken = jwtDecode(token);

        // Check if token is expired
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem("serviceToken");
          localStorage.removeItem("serviceUser");
          setIsAuthenticated(false);
          return;
        }

        const storedUser = localStorage.getItem("serviceUser");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setLoggedInUser(parsedUser);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Token validation error:", error);
        setIsAuthenticated(false);
      }
    };

    checkTokenValidity();
  }, []);

  // Socket connection
  useEffect(() => {
    if (!isAuthenticated || !loggedInUser) {
      return;
    }

    socketRef.current = io("http://localhost:4550", {
      transports: ["websocket"],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
      auth: {
        token: localStorage.getItem("serviceToken"),
      },
    });

    socketRef.current.on("connect", () => {
      socketRef.current.emit("newUser", loggedInUser.id, socketRef.current.id);
    });

    // Listen to incoming messages
    socketRef.current.on("receiveMessage", (message) => {
      if (message.sender === loggedInUser.id || message.sender === friendId) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    });

    // Clean up the socket on component unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [loggedInUser, friendId, isAuthenticated]);

  // Fetch Users and Messages with Authorization
  useEffect(() => {
    const fetchWithAuth = async (url, options = {}) => {
      const token = localStorage.getItem("serviceToken");

      const headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      try {
        const response = await fetch(url, {
          ...options,
          headers,
        });

        if (response.status === 401) {
          // Token is invalid or expired
          setIsAuthenticated(false);
          return null;
        }

        return response;
      } catch (error) {
        console.error("Fetch error:", error);
        return null;
      }
    };

    const fetchUsers = async () => {
      if (!isAuthenticated) return;

      const response = await fetchWithAuth("http://localhost:4500/users");
      if (response && response.ok) {
        const data = await response.json();
        setUsers(
          data.usersFound.filter((user) => user._id !== loggedInUser.id)
        );
      }
    };

    const fetchMessages = async () => {
      if (!isAuthenticated || !friendId || !loggedInUser.id) return;

      const response = await fetchWithAuth(
        `http://localhost:4500/messages/${loggedInUser.id}/${friendId}`
      );

      if (response && response.ok) {
        const data = await response.json();
        setMessages(data.messages);
      }
    };

    fetchUsers();
    fetchMessages();
  }, [isAuthenticated, loggedInUser, friendId]);

  // Message sending with Authorization
  const handleMessage = async () => {
    if (!isAuthenticated || !friendId || !loggedInUser.id) {
      toast.error("Authentication required");
      return;
    }

    const token = localStorage.getItem("serviceToken");

    try {
      const response = await fetch(`http://localhost:4500/messages/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          sender: loggedInUser.id,
          receiver: friendId,
          message: newMessage,
          receiverName: friendName,
          senderName: loggedInUser.username,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Error sending message");
        return;
      }

      // Socket message sending logic
      if (socketRef.current) {
        socketRef.current.emit("sendMessage", {
          content: newMessage,
          senderId: loggedInUser.id,
          receiverId: friendId,
          senderName: loggedInUser.username,
          receiverName: friendName,
        });
      }

      toast.success("Message sent successfully");
      setNewMessage("");
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div id="chat" className="flex flex-row overflow-clip space-x-0 w-full">
      <div className="users flex-[1] h-screen flex-col  space-y-16 p-5 px-3 bg-gray z-[1000]">
        <Toaster position="top-left"></Toaster>
        <p>ServiceSphere</p>
        <div className="flex flex-col space-y-3 overflow-scroll overflow-x-hidden h-[80%]">
          {users.map((eachUser) => (
            <div
              onClick={() => setFriendId(eachUser.id)}
              key={eachUser.email}
              className="flex space-x-5 items-center rounded-md hover:bg-other p-2 cursor-pointer hover:text-white px-2"
            >
              <img
                src="/bike.jpg"
                alt=""
                className="size-12 rounded-full object-cover"
              />
              <p>{eachUser.username}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col relative space-y-5 flex-[6] overflow-clip p-2 z-[1000]">
        <div
          id="chatHero"
          className="w-[100%] h-32 flex items-center justify-center bg-gray m-[1px] rounded-md relative"
        >
          <p className="font-alata my-3">
            Good {greeting}, {loggedInUser?.username}
          </p>
          <div className="flex item-center w-72 justify-between bg-white p-2 px-4 absolute bottom-5 left-5">
            <input
              type="text"
              className="font-thin outline-none w-[90%]"
              placeholder="Search a friend to chat with"
            />
            <IoIosSearch></IoIosSearch>
          </div>
          {friendId && (
            <div className="absolute right-5 bottom-5 w-fit flex space-x-3 items-center">
              <SiDwavesystems className="animate-ping" />
              <p className="font-alata text-other">
                Chatting with {friendName}
              </p>
            </div>
          )}

          <img
            src="/services.jpg"
            className="rounded-full size-20 border-5 border-[#00457c90] object-cover absolute -bottom-10"
            alt=""
          />
        </div>

        <div className="messagesContainer flex flex-col space-y-2 h-[65%] p-5 overflow-scroll overflow-x-hidden">
          {messages.map((eachMessage) => (
            <div
              key={eachMessage._id}
              className={`relative w-[400px] rounded-2xl p-5 ${
                eachMessage.sender === loggedInUser.id
                  ? "bg-green text-white ml-auto rounded-br-none"
                  : "bg-blue text-white mr-auto rounded-tr-none"
              }`}
            >
              <p className="font-alata font-thin text-base mb-5 mt-5">
                {eachMessage.message}
              </p>
              <p className="absolute top-2 right-3 text-sm">
                {eachMessage.sender === loggedInUser.id
                  ? "You"
                  : eachMessage.senderName}
              </p>
              <p className="absolute bottom-5 right-3 text-xs">
                {format(eachMessage.timeSent, "hh:mm a")}
              </p>
              <p className="absolute bottom-1 right-3 text-xs">
                {formatDistanceToNow(new Date(eachMessage.timeSent))}
                <span className="mx-1">ago</span>
              </p>
            </div>
          ))}
        </div>

        <div className="w-[97%] absolute bottom-2 p-2 flex justify-between items-center px-10 bg-white ">
          <textarea
            disabled={friendId ? false : true}
            className="w-[90%] outline-none font-thin"
            rows={2}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            autoFocus
            placeholder={`What is in your mind, ${loggedInUser?.username}?`}
          />
          <IoIosSend
            onClick={handleMessage}
            className="text-xl cursor-pointer"
          ></IoIosSend>
        </div>
      </div>
    </div>
  );
};

export default Chat;
