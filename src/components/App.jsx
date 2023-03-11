import React, { useEffect, useState } from 'react';
import ContactForm from './form/ContactForm';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log(contacts);
  }, [contacts]);
  const formSubmitHandler = (name, number) => {
    setContacts(prevState => [...prevState, { name, number, id: nanoid() }]);

    console.log(name);
    console.log(contacts);
    console.log(filter);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'filter':
        setFilter(value);
        break;
      default:
        return;
    }
    console.log(contacts);
    console.log(filter);
  };
  const filterContacts = () => {
    const toLowerFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(toLowerFilter) ||
        contact.number.includes(toLowerFilter)
      );
    });
  };
  const doubleContactName = name => {
    return contacts.find(contact => contact.name.toLowerCase() === name);
  };
  const deleteContact = event => {
    const leaveContacts = contacts.filter(contact => {
      return contact.name !== event.target.parentNode.id;
    });
    return setContacts(prevState => [...prevState, ...leaveContacts]);
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={formSubmitHandler}
        doubleContactName={doubleContactName}
      />
      <h1>Contacts</h1>
      <Filter handleChange={handleChange} filter={filter} />
      <ContactList
        contacts={contacts}
        filterContacts={filterContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
}
