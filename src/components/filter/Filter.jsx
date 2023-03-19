import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};
