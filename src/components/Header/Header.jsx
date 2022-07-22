import { Link, Outlet } from 'react-router-dom';
import style from './Header.module.css';

export const Header = () => {
  return (
    <>
      <div className={style.header}>
        <h1>Phonebook</h1>
        <Link to="/contacts" className={style.contacts}>
          Contacts
        </Link>
        <Link to="/signup" className={style.signUp}>
          Sign up
        </Link>
        <Link to="/signin" className={style.signIn}>
          Sign in
        </Link>
      </div>
      <Outlet />
    </>
  );
};
