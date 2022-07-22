import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations.js';
import RegisterForm from './RegisterForm/RegisterForm';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Contacts } from 'Pages/Contacts';

export function App() {
  const post = useSelector(state => state.phonebook.post);
  const isDelete = useSelector(state => state.phonebook.delete);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
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
          <Route index element="" />
          <Route path="signup" element={<RegisterForm />} />
          <Route path="contacts" element={<Contacts />} />
          <Route
            path="*"
            element={<p>Ты что ебанутый что ты тут делаешь??</p>}
          />
        </Route>
      </Routes>
    </>
  );
}
