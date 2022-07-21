import style from './Filter.module.css';
import { addFilter } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';

export default function Filter() {
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const addToFilter = e => {
    dispatch(addFilter(e.target.value));
    // console.log(filter);
  };

  return (
    <>
      <p className={style.filter}>Find contacts by name</p>
      <input type="filter" value={filter} onChange={addToFilter} />
    </>
  );
}
