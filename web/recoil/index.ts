import {atom} from 'recoil';

export const searchState = atom({
  key: 'search',
  default: '', 
});


export default {searchState}
