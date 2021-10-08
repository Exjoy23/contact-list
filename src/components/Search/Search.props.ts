import { Dispatch, SetStateAction } from 'react';

export interface SearchProps {
  onSetIsVisible: Dispatch<SetStateAction<boolean>>;
  isVisible: boolean;
}
