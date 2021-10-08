import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Contact } from '../Item/Item.props';
import styles from './Form.module.scss';
import { FormProps } from './Form.props';

export const Form = ({
  onSetIsVisible,
  onSetContacts,
}: FormProps): JSX.Element => {
  const [contact, setContact] = useState('');
  const [name, setName] = useState('');

  return (
    <form
      className={styles.form}
      onSubmit={(evt) => {
        evt.preventDefault();

        if (contact.trim() && name.trim()) {
          onSetContacts((prevState: Contact[]) => [
            ...prevState,
            { id: new Date().getMilliseconds(), contact, name },
          ]);
          setContact('');
          setName('');
        }
      }}
    >
      <Input
        onChange={(evt) => setContact(evt.target.value)}
        value={contact}
        placeholder="Контакт"
      />
      <Input
        onChange={(evt) => setName(evt.target.value)}
        value={name}
        placeholder="Имя"
      />
      <Button className={styles.button_add} type="submit" />
      <Button
        className={styles.button_hide}
        onClick={() => onSetIsVisible(false)}
      />
    </form>
  );
};
