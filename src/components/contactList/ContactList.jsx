import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/constactSlice';
import { getFilter } from 'redux/selectors';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={css.classList}>
          {filtered.map(contact => (
            <li className="" key={contact.id} id={contact.name}>
              <span className={css.classList_name}>{contact.name}:</span>
              <span className={css.classList_number}>{contact.number}</span>
              <button
                className={css.classList_button}
                onClick={() => dispatch(deleteContact(contact.id))}
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h2>
          {' '}
          Add some contacts <br /> Your phonebook is empty{' '}
        </h2>
      )}
    </>
  );
};
