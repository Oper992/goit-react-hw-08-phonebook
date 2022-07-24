import { Link, Outlet } from 'react-router-dom';
import style from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const isLoggedIn = useSelector(state => state.phonebook.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      <div className={style.header}>
        <Link to="/" className={style.title}>
          Phonebook
        </Link>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <Link to="/signup" className={style.signUp}>
              Sign up
            </Link>
            <Link to="/signin" className={style.signIn}>
              Sign in
            </Link>
          </>
        )}
      </div>
      <Outlet />
    </>
  );
};
