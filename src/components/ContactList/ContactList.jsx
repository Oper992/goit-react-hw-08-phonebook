import style from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContact } from 'redux/operations.js';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Button from 'react-bootstrap/Button';

export default function ContactList() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    // console.log(contacts);
    return filteredContacts;
  };

  const deleteContacts = e => {
    dispatch(deleteContact(e.target.value));
    toast.success(`The contact has been deleted`);
  };

  return (
    <>
      {filteredContacts().length ? (
        <ul className={style.list}>
          {filteredContacts().map(({ name, id, number }) => (
            <li key={id} className={style.contact}>
              {name}: {number}
              <Button
                variant="primary"
                type="button"
                value={id}
                onClick={deleteContacts}
                className={style.buttonDelete}
              >
                Delete
              </Button>
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
