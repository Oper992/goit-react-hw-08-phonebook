import { Link, Outlet } from 'react-router-dom';
import style from './Header.module.css';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';

const styleSpinner = {
  width: '5rem',
  height: '5rem',
};

export const Header = () => {
  const isLoggedIn = useSelector(state => state.phonebook.isLoggedIn);
  const refresh = useSelector(state => state.phonebook.refresh);
  // const dispatch = useDispatch();

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
            {refresh === false && (
              <>
                <Link to="/signup" className={style.signUp}>
                  Sign up
                </Link>
                <Link to="/signin" className={style.signIn}>
                  Sign in
                </Link>
              </>
            )}
          </>
        )}
      </div>
      {refresh ? (
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="spinner-border text-primary m-5"
            style={styleSpinner}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};
