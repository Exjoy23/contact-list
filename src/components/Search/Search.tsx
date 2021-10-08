import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Search.module.scss';
import { SearchProps } from './Search.props';

export const Search = ({
  isVisible,
  onSetIsVisible,
}: SearchProps): JSX.Element => {
  return (
    <form className={styles.form}>
      <Input placeholder="Найти..." aria-label="поле поиска" />
      <Button className={styles.button_search} />
      {!isVisible && (
        <Button
          className={styles.button_add}
          onClick={() => onSetIsVisible(true)}
        />
      )}
    </form>
  );
};
