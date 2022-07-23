import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import style from './Contacts.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import { getContacts } from 'redux/operations';

export const Contacts = () => {
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={style.contacts}>
      <div>
        <ContactForm />
        <Filter />
      </div>
      <div className={style.contactsList}>
        <h2 className={style.contactsTitle}>My contacts</h2>
        {isLoading && contacts.length === 0 ? (
          <BallTriangle color="#00BFFF" height={80} width={80} />
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
};
