import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import style from './Contacts.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import { getContacts } from 'redux/operations';

export const Contacts = () => {
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const contacts = useSelector(state => state.phonebook.contacts);
  const post = useSelector(state => state.phonebook.post);
  const isDelete = useSelector(state => state.phonebook.delete);
  const dispatch = useDispatch();

  useEffect(() => {
    const dispatchContacts = () => {
      dispatch(getContacts());
    };
    dispatchContacts();
  }, [dispatch]);

  useEffect(() => {
    if (post === true || isDelete === true) {
      dispatch(getContacts());
    }
  }, [dispatch, post, isDelete]);

  return (
    <div className={style.contacts}>
      <div>
        <ContactForm />
        <Filter />
      </div>
      <div className={style.contactsList}>
        <h2 className={style.contactsTitle}>My contacts</h2>
        {isLoading && contacts.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="spinner-border text-primary m-5"
              style={{ width: '5rem', height: '5rem' }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
};
