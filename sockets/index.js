import {Server} from 'socket.io';
import {createServer} from 'http';

// Create a server
const httpServer = createServer ();
const io = new Server (httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['POST', 'GET'],
  },
  pingTimeout: 60000,
});

// Initialize active users
let activeUsers = [];

const addUser = (socketId, userId) => {
  !activeUsers.some (user => user.userId === userId) &&
    activeUsers.push ({userId, socketId});
  return activeUsers;
};

const removeUser = socketId => {
  activeUsers = activeUsers.filter (user => user.userId !== socketId);
  return activeUsers;
};

io.on ('connection', socket => {
  console.log (`New connection established for socket id ${socket.id}`);

  // Grab new user and add them to our list
  socket.on ('newUser', (userId, socketId) => {
    try {
      if (!userId) {
        console.log ('User id must be provided');
        return;
      }
      const newUser = addUser (userId, socketId);

      console.log ('New users after new connection', activeUsers);

      // After successful connection send this data to all users
      io.emit ('getUsers', activeUsers);
    } catch (error) {
      console.log ('Error adding user to list');
      console.log (error.message);
    }
  });

  // Handle a new message and update receiver and senders UI
  socket.on ('sendMessage', messageData => {
    const {
      content,
      senderId,
      receiverId,
      senderName,
      receiverName,
    } = messageData;

    try {
      const message = {
        content,
        sender: senderId,
        receiver: receiverId,
        senderName,
        receiverName,
        timeSent: new Date (),
      };

      // Check if the user is currently active - update the UI immediately
      const receiver = activeUsers.find (user => user.userId === receiverId);
      if (receiver) {
        io.to (receiver.socketId).emit ('getMessage', message);
      } else {
        return;
      }

      socket.emit ('messageSent', message);
    } catch (error) {
      console.log ('Error sending messages', error.message);
    }
  });

  // Handle disconnect
  socket.on ('disconnect', () => {
    try {
      console.log (`User disconnected from socket${socket.id}`);
      removeUser (socket.id);

      io.emit ('getUsers', activeUsers);
    } catch (error) {
      console.log ('Error disconnecting user');
      console.log (error.message);
    }
  });
});

// Start the server
const PORT = 4550;
httpServer.listen (PORT, () => {
  console.log (`Socket.IO server running on port ${PORT}`);
});

io.engine.on ('connection_error', error => {
  console.log ('Connection error' + error);
  return;
});

process.on ('unhandledRejection', (reason, promise) => {
  console.log ('Unhandled Rejection at promise' + promise + 'reason' + reason);
  return;
});
