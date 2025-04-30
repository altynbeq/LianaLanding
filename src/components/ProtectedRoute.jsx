// components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAdmin') === 'true'; // Replace with your real check
  return isAuthenticated ? children : <Navigate to="/logIn" replace />;
};

export default ProtectedRoute;
