import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser, getContacts } from 'redux/operations.js';
import RegisterForm from '../Pages/RegisterForm/RegisterForm';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Contacts } from '../Pages/Contacts/Contacts';
import { SignIn } from '../Pages/SignIn/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { HomePage } from 'Pages/HomePage/HomePage';
import { ToastContainer } from 'react-toastify';

export function App() {
  const post = useSelector(state => state.phonebook.post);
  const isDelete = useSelector(state => state.phonebook.delete);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (post || isDelete) {
      dispatch(getContacts());
    }
  }, [dispatch, post, isDelete]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route
            path="signup"
            element={
              <PublicRoute>
                <RegisterForm />
              </PublicRoute>
            }
          />
          <Route
            path="signin"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<p>Что то пошло не так</p>} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1500} />
    </>
  );
}
