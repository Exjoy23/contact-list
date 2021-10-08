import React from 'react';
import styles from './Input.module.scss';
import { InputProps } from './Input.props';

export const Input = ({ ...props }: InputProps): JSX.Element => {
  return (
    <label>
      <input className={styles.input} {...props} type="text" />
    </label>
  );
};
