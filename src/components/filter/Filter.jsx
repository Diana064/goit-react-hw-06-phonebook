import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/constactSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
      />
    </label>
  );
};
