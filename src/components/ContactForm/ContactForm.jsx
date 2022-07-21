import { useState } from 'react';
import style from './ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { postContact } from 'redux/operations';
// import * as api from '../../api/contactsApi';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BallTriangle } from 'react-loader-spinner';
// import { getContacts } from 'redux/operations.js';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const contacts = useSelector(state => state.phonebook.contacts);
  const post = useSelector(state => state.phonebook.post);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    addContacts(name, number);

    toast.success(`Contact ${name} has been added`);

    reset();
  };

  const reset = () => {
    const { name, number } = INITIAL_STATE;

    setName(name);
    setNumber(number);
  };

  const addContacts = (contactName, contactNumber) => {
    // const id = nanoid();

    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      window.alert(`${contactName} is already in contacts`);
    } else {
      dispatch(
        postContact({
          name: contactName,
          phone: contactNumber,
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      {isLoading && post === 'pending' ? (
        <BallTriangle color="#00BFFF" height={30} width={30} />
      ) : (
        <button type="submit">Add contact</button>
      )}
      <ToastContainer />
    </form>
  );
}
