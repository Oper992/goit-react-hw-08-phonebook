import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import Button from 'react-bootstrap/Button';
import style from './UserMenu.module.css';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const user = useSelector(state => state.phonebook.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logOut());
    // console.log(user);
  };

  const getMyContacts = () => {
    navigate('/contacts');
  };

  return (
    <div className={style.menu}>
      <p>{user.email}</p>
      <Button
        className={style.button}
        variant="primary"
        type="button"
        onClick={getMyContacts}
      >
        My contacts
      </Button>
      <Button
        className={style.button}
        variant="primary"
        type="button"
        onClick={onClick}
      >
        Log out
      </Button>
    </div>
  );
};
