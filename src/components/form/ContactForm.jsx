import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/constactSlice';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts.`)
      : dispatch(
          addContact({
            id: nanoid(),
            name: name,
            number: number,
          })
        );

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name">
        Name
        <input
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
