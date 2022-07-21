import { Link } from 'react-router-dom';
import style from './Header.module.css';

export const Header = () => {
  return (
    <div className={style.header}>
      <h1>Phonebook</h1>
      <Link to="/signup">Sign up</Link>
    </div>
  );
};
