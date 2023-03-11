export const Filter = ({ handleChange, filter }) => {
  return (
    <label className="">
      Find contacts by name
      <input type="text" name="filter" onChange={handleChange} value={filter} />
    </label>
  );
};
