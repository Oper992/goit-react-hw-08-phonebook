import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import style from './Contacts.module.css';
import { BallTriangle } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ContactForm from '../components/ContactForm/ContactForm';

export const Contacts = () => {
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const contacts = useSelector(state => state.phonebook.contacts);

  return (
    <>
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
};
