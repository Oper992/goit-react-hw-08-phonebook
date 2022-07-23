import style from './Filter.module.css';
import Form from 'react-bootstrap/Form';
import { addFilter } from 'redux/slice';
import { useSelector, useDispatch } from 'react-redux';

export default function Filter() {
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const addToFilter = e => {
    dispatch(addFilter(e.target.value));
    // console.log(filter);
  };

  return (
    <div className={style.filter}>
      <p>Find contacts by name</p>

      <Form.Control type="filter" value={filter} onChange={addToFilter} />
    </div>
  );
}
