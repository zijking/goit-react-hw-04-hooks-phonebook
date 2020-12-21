import React from 'react';
import s from './Contacts.module.css';

function Contacts({ contacts, onDelete }) {
  return (
    <ul className={s.contactList}>
      {contacts.map(c => {
        return (
          <li className={s.item} key={c.id}>
            <p className={s.contactItem}>
              <span>
                <strong>{c.name}:</strong> {c.number}
              </span>
              <button className="btn" onClick={() => onDelete(c.id)}>
                Delete
              </button>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;
