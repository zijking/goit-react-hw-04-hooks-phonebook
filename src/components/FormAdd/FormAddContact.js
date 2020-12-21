import React, { Component } from 'react';
import s from './form.module.css';

class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };
  onChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  /**Скидання форми */
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  formSubmit = event => {
    // console.log(event);
    // console.log('Sumit ----');
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.resetForm();
    // console.log(this.state);
  };
  render() {
    return (
      <form className={s.form} onSubmit={this.formSubmit}>
        <label className={s.input}>
          Name:<br></br>
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.name}
            name="name"
          />
        </label>
        <label className={s.input}>
          Number:<br></br>
          <input
            type="text"
            name="number"
            onChange={this.onChange}
            value={this.state.number}
          />
        </label>
        <input className="btn" type="submit" value="Add contact" />
      </form>
    );
  }
}

export default FormAddContact;
