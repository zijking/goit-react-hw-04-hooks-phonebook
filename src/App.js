import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactForm from './components/FormAdd';
const CONTACTS_LOCAL = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  onChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handelAddContact = (name, number) => {
    const { contacts } = this.state;
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

    this.setState(({ contacts }) => ({
      contacts: [objCon, ...contacts],
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(c => c.id !== contactId),
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('conmponentDidUpdate()');

    //оновлення сонтактів
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(CONTACTS_LOCAL, JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    console.log('componentDidMount');

    const contacts = localStorage.getItem(CONTACTS_LOCAL);
    const parse = JSON.parse(contacts);
    if (parse) {
      this.setState({ contacts: parse });
    } else {
      this.setState({ contacts: [] });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handelAddContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.onChange} />
        <ContactList
          contacts={this.getVisibleContacts()}
          value={this.state.filter}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
