import React, {useContext} from 'react';

// context
import {DataContext} from '../../context/DataContext/DataContext';
// components
import en from '../../components/helper/en';
import mm from '../../components/helper/mm';

export const useLocal = () => {
  const {lang} = useContext(DataContext);

  if (lang === 'EN') {
    return en;
  } else {
    return mm;
  }
};
