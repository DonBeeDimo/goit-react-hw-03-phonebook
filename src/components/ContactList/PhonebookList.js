import React from 'react';
import { BsXSquareFill } from 'react-icons/bs';

import PropTypes from 'prop-types';
import s from './PhonebookList.module.css';

export default function PhonebookList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.listItem} key={id}>
          {name + ':' + number}
          <BsXSquareFill
            color="red"
            size="20px"
            className={s.btn}
            type="button"
            name="delete"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </BsXSquareFill>
        </li>
      ))}
    </ul>
  );
}

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
