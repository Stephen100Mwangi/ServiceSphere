// // Import Navigate and jwtDecode
// import { Navigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// // eslint-disable-next-line react/prop-types
// const ProtectedRoute = ({ children }) => {
//   // const token = localStorage.getItem("serviceToken");

//   // if (!token) {
//   //   return <Navigate to="/login" replace />;
//   // } else {
//   //   return children;
//   // }

//   // Verify token expiration

//   // try {
//   //   const decoded = jwtDecode(token);
//   //   if (decoded.exp * 1000 < Date.now()) {
//   //     localStorage.removeItem("serviceToken");
//   //     localStorage.removeItem("serviceUser");
//   //     return <Navigate to="/login" replace></Navigate>;
//   //   }

//   //   return children;
//   // } catch (error) {
//   //   localStorage.removeItem("serviceToken");
//   //   localStorage.removeItem("serviceUser");
//   //   console.log(error);
//   //   return <Navigate to="/login" replace></Navigate>;
//   // }
// };

// export default ProtectedRoute;
