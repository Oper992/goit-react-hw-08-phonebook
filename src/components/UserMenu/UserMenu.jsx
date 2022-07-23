import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <p>Hello</p>
      <button type="button" onClick={onClick}>
        Log out
      </button>
    </>
  );
};
