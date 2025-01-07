import {jwtDecode} from 'jwt-decode';
import {Navigate, useLocation} from 'react-router-dom';

export const setAuthToken = token => {
  if (token) {
    // Store token in local storage
    localStorage.setItem ('serviceToken', token);
  } else {
    // Remove token from local storage
    localStorage.removeItem ('serviceToken');
  }
};

export const isTokenExpired = token => {
  if (!token) return true;

  try {
    const decoded = jwtDecode (token);

    // Check whether token is expired
    const currentTime = Date.now () / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};

export const fetchWithAuth = async (url, options = {}) => {
  const token = localStorage.getItem ('serviceToken');

  // Prepare headers, merging with any existing headers
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch (url, {
      ...options,
      headers,
    });

    // Check for unauthorized access
    if (response.status === 401) {
      // Token is invalid or expired
      logout ();
      return null;
    }

    return response;
  } catch (error) {
    console.error ('Fetch error:', error);
    return null;
  }
};

export const logout = () => {
  // Remove authentication-related items from local storage
  localStorage.removeItem ('serviceToken');
  localStorage.removeItem ('serviceUser');

  // Redirect the user to login page
  window.location.href = '/login';
};

// Protect routes
export const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem ('serviceToken');
  const location = useLocation ();

  // if (!token || isTokenExpired (token)) {
  //   return <Navigate to="/login" state={{from: location}} replace />;
  // }

  return children;
};

// Utility to get current user from local storage
export const getCurrentUser = () => {
  const token = localStorage.getItem ('serviceToken');
  const userString = localStorage.getItem ('serviceUser');

  if (!token || isTokenExpired (token)) {
    return null;
  }

  try {
    return userString ? JSON.parse (userString) : null;
  } catch (error) {
    console.error ('Error parsing user data:', error);
    return null;
  }
};
