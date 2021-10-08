import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({ className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, className)}
      type="button"
      {...props}
    />
  );
};
