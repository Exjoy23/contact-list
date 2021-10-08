import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Item.module.scss';
import { Contact, ItemProps } from './Item.props';

export const Item = ({
  id,
  contact,
  name,
  onSetContacts,
}: ItemProps): JSX.Element => {
  const [isHover, setIsHover] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [contactField, setContactField] = useState(contact);
  const [nameField, setNameField] = useState(name);

  const onButtonAddClick = () => {
    if (contactField.trim() && nameField.trim()) {
      onSetContacts((prevState: Contact[]) => {
        const contactIndex = prevState.findIndex((item) => item.id === id);
        const editedContacts = prevState.slice();
        editedContacts.splice(contactIndex, 1, {
          id,
          contact: contactField,
          name: nameField,
        });

        return editedContacts;
      });
      setIsEdit(false);
    }
  };

  const onButtonRemove = () => {
    onSetContacts((prevState: Contact[]) =>
      prevState.filter((item) => item.id !== id),
    );
  };

  return (
    <li
      className={styles.item}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isEdit ? (
        <>
          <Input
            onChange={(evt) => setContactField(evt.target.value)}
            value={contactField}
          />
          <Input
            onChange={(evt) => setNameField(evt.target.value)}
            value={nameField}
          />
          <Button
            className={styles.button_complete}
            onClick={onButtonAddClick}
          />
        </>
      ) : (
        <>
          <div className={styles.contact}>{contact}</div>
          <div className={styles.name}>{name}</div>
        </>
      )}
      {isHover && !isEdit && (
        <>
          <Button
            className={styles.button_edit}
            onClick={() => setIsEdit(true)}
          />
          <Button className={styles.button_remove} onClick={onButtonRemove} />
        </>
      )}
    </li>
  );
};
