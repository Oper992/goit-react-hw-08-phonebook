import style from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/operations.js';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Button from 'react-bootstrap/Button';
import { useRef } from 'react';

export default function ContactList() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const isDelete = useSelector(state => state.phonebook.delete);
  const ref = useRef();
  const dispatch = useDispatch();

  const filteredContacts = () => {
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    // console.log(contacts);
    return filteredContacts;
  };

  const deleteContacts = e => {
    // dispatch(deleteContact(e.target.value));
    // toast.success(`The contact has been deleted`);
    toggleButtonStatus(e.target.id);
  };

  const toggleButtonStatus = id => {
    const currentButton = ref.current;
    currentButton.remove();
    // currentButton.append(
    //   <button
    //     className="btn btn-outline-danger"
    //     type="button"
    //     value={id}
    //     id={id}
    //     ref={ref}
    //     onClick={deleteContacts}
    //   />
    // );
  };

  return (
    <>
      {filteredContacts().length ? (
        <ul className={style.list}>
          {filteredContacts().map(({ name, id, number }) => (
            <li key={id} className={style.contact}>
              <b>{name}:</b>
              <p className={style.number}>{number}</p>
              <button
                className="btn btn-outline-danger"
                type="button"
                value={id}
                id={id}
                ref={ref}
                onClick={deleteContacts}
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                  id={id}
                ></span>
                <span id={id} className="visually-hidden">
                  Loading...
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>So far no contacts</p>
      )}
    </>
  );
}
