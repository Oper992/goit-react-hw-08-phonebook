import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as operations from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import style from './SignIn.module.css';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useSelector(state => state.phonebook.login);
  const dispatch = useDispatch();

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    dispatch(operations.login({ email, password }));
  };

  return (
    <>
      {login ? (
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
        <Form className={style.form} onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      )}
    </>
  );
};
