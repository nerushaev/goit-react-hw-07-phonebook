import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import { addContact } from 'redux/contacts/contacts-operation';
import { useDispatch } from 'react-redux';

const FormAddContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  
  const numberId = nanoid();
  const nameId = nanoid();

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case "name":
        return setName(value);
      case "number":
        return setNumber(value);
      default:
        return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({name, number}))
    setName('');
    setNumber('');
  }
  
    return (
      <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor={nameId}>Name</label>
              <input
              name="name"
              id={nameId}
              onChange={handleChange}
              value={name}
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
            <div className="input-field">
              <label htmlFor={numberId}>Number</label>
              <input
              name="number"
              id={numberId}
              onChange={handleChange}
              value={number}
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            </div>
            <button className="submit-btn">Add contact</button>
          </form>
    )
}

FormAddContacts.propTypes = {
  onSubmit: propTypes.func,
}

export default FormAddContacts;