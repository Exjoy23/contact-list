import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.scss';

const ITEMS = [
  { name: 'Контакты', path: '/contacts' },
  { name: 'Войти', path: '/login' },
];

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <ul className={styles.list}>
          {ITEMS.map((item) => (
            <li key={item.name}>
              <Link className={styles.link} to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
