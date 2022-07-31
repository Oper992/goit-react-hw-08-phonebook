import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from './ContactForm.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { postContact } from 'redux/operations';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.phonebook.contacts);
  const createPost = useSelector(state => state.phonebook.createPost);
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

  const handleSubmit = e => {
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
          number: contactNumber,
        })
      );
      // console.log(contactNumber)
    }
  };

  return (
    <Form className={style.form} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="паляниця..."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="+38(0..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          name="number"
          value={number}
          onChange={handleChange}
        />
      </Form.Group>
      {createPost ? (
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      ) : (
        <Button variant="primary" type="submit">
          Add contact
        </Button>
      )}
    </Form>
  );
}
