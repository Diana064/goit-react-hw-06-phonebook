import css from './ContactList.module.css';
export const ContactList = ({ contacts, filterContacts, deleteContact }) => {
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={css.classList}>
          {filterContacts.map(contact => (
            <li className="" key={contact.id} id={contact.name}>
              <span className={css.classList_name}>{contact.name}:</span>
              <span className={css.classList_number}>{contact.number}</span>
              <button
                className={css.classList_button}
                onClick={deleteContact}
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
