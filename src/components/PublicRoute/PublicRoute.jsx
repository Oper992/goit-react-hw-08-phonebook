import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(state => state.phonebook.isLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
}
