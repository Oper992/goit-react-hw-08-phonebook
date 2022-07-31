import { toast } from 'react-toastify';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import style from './ContactsItem.module.css';

export const ContactsItem = ({ id, name, number }) => {
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();

  const deleteContacts = e => {
    const contactName = e.target.name;

    setIsDelete(true);
    dispatch(deleteContact(e.target.value));
    toast.success(`The contact ${contactName} has been deleted`);
    // setIsDelete(false);
  };

  return (
    <li key={id} className={style.contact}>
      <b>{name}:</b>
      <p className={style.number}>{number}</p>
      {isDelete ? (
        <button className="btn btn-outline-danger" type="button">
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span> Delete</span>
        </button>
      ) : (
        <button
          className="btn btn-outline-danger"
          type="button"
          name={name}
          onClick={deleteContacts}
          value={id}
        >
          Delete
        </button>
      )}
    </li>
  );
};
