import style from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContact } from 'redux/operations.js';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function ContactList() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContacts = e => {
    dispatch(deleteContact(e.target.value));
    toast.success(`The contact has been deleted`);
  };

  return (
    <>
      {filteredContacts().length ? (
        <ul className={style.list}>
          {filteredContacts().map(({ name, id, phone }) => (
            <li key={id} className={style.contact}>
              {name}: {phone}
              <button
                type="button"
                value={id}
                onClick={deleteContacts}
                className={style.buttonDelete}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>So far no contacts</p>
      )}
      <ToastContainer />
    </>
  );
}
