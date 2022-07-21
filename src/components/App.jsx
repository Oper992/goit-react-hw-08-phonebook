import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import style from './App.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BallTriangle } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations.js';
// import { contacts } from 'redux/contacts';

export function App() {
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const contacts = useSelector(state => state.phonebook.contacts);
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
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <div className={style.filteredContacts}>
        <h2 className={style.contactsTitle}>Contacts</h2>
        <Filter />
        {isLoading && contacts.length === 0 ? (
          <BallTriangle color="#00BFFF" height={80} width={80} />
        ) : (
          <ContactList />
        )}
      </div>
    </>
  );
}
