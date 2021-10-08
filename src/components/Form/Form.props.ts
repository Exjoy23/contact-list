import { Dispatch, SetStateAction } from 'react';
import { Contact } from '../Item/Item.props';

export interface FormProps {
  onSetIsVisible: Dispatch<SetStateAction<boolean>>;
  onSetContacts: Dispatch<SetStateAction<Contact[]>>;
}
