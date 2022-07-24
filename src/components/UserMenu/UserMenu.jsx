import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import Button from 'react-bootstrap/Button';
import style from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(state => state.phonebook.user);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logOut());
    // console.log(user);
  };

  return (
    <div className={style.menu}>
      <p>{user.email}</p>
      <Button className={style.button} variant="primary" type="button" onClick={onClick}>
        Log out
      </Button>
    </div>
  );
};
