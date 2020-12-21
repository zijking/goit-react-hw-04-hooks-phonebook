import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactForm from './components/FormAdd';
const CONTACTS_LOCAL = 'contacts';

function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);

  const onChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'filter': {
        setFilter(value);
        break;
      }
      default:
        return;
    }
  };

  const handelAddContact = (name, number) => {
    const normalizedName = name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      window.alert(`${name} is alredy in contacts`);
      return;
    }

    const objCon = {
      name,
      number,
      id: uuidv4(),
    };

    setContacts(prevState => [objCon, ...prevState]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(c => c.id !== contactId));
  };

  useEffect(() => {
    const contacts = localStorage.getItem(CONTACTS_LOCAL);
    const parse = JSON.parse(contacts);
    if (parse) {
      setContacts(parse);
    } else {
      setContacts([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_LOCAL, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handelAddContact} />

      <h2>Contacts</h2>
      <Filter onChange={onChange} />
      <ContactList
        contacts={getVisibleContacts()}
        value={filter}
        onDelete={deleteContact}
      />
    </div>
  );
}

export default App;
