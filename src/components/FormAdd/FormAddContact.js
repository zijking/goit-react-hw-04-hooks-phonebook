import { useState } from 'react';
import s from './form.module.css';

function FormAddContact({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    resetForm();
  };

  /**Скидання форми */
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const onChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'number': {
        setNumber(value);
        break;
      }
      default:
        return;
    }
  };

  return (
    <form className={s.form} onSubmit={formSubmit}>
      <label className={s.input}>
        Name:<br></br>
        <input type="text" onChange={onChange} value={name} name="name" />
      </label>
      <label className={s.input}>
        Number:<br></br>
        <input type="text" name="number" onChange={onChange} value={number} />
      </label>
      <input className="btn" type="submit" value="Add contact" />
    </form>
  );
}

export default FormAddContact;
