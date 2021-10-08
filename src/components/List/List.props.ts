import { Dispatch, SetStateAction } from 'react';
import { Contact } from '../Item/Item.props';

export interface ListProps {
  contacts: Contact[];
  onSetContacts: Dispatch<SetStateAction<Contact[]>>;
}
