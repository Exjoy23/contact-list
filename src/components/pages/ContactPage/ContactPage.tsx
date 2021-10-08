import React, { useState } from 'react';
import { Footer } from '../../Footer/Footer';
import { Form } from '../../Form/Form';
import { Header } from '../../Header/Header';
import { Contact } from '../../Item/Item.props';
import { List } from '../../List/List';
import { Search } from '../../Search/Search';
import styles from './ContactPage.module.scss';

export const ContactPage = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.inputs}>
            <Search isVisible={isVisible} onSetIsVisible={setIsVisible} />
            {isVisible && (
              <Form onSetIsVisible={setIsVisible} onSetContacts={setContacts} />
            )}
          </div>
          <List contacts={contacts} onSetContacts={setContacts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};
