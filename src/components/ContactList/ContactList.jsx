import style from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export default function ContactList() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  // const isDelete = useSelector(state => state.phonebook.delete);

  const filteredContacts = () => {
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    // console.log(contacts);
    return filteredContacts;
  };

  return (
    <>
      {filteredContacts().length ? (
        <ul className={style.list}>
          {filteredContacts().map(({ name, id, number }) => (
            <ContactsItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        <p>So far no contacts</p>
      )}
    </>
  );
}
