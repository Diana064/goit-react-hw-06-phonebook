import ContactForm from './form/ContactForm';
import css from './App.module.css';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

export default function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
}
