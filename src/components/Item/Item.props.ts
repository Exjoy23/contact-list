import { Dispatch, SetStateAction } from 'react';

export interface Contact {
  id: number;
  contact: string;
  name: string;
}

export interface ItemProps extends Contact {
  onSetContacts: Dispatch<SetStateAction<Contact[]>>;
}
