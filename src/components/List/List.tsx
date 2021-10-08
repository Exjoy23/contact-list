import React from 'react';
import { Item } from '../Item/Item';
import styles from './List.module.scss';
import { ListProps } from './List.props';

export const List = ({ contacts, onSetContacts }: ListProps): JSX.Element => {
  return (
    <ul className={styles.list}>
      {contacts.map((item) => (
        <Item key={item.id} {...item} onSetContacts={onSetContacts} />
      ))}
    </ul>
  );
};
