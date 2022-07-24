import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(state => state.phonebook.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/signin" replace />;
}
