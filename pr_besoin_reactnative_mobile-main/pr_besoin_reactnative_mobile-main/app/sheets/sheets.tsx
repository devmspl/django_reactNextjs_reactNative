import {registerSheet} from 'react-native-actions-sheet';
import CountrySelectSheet from './CountrySelectSheet';
import CategorySelectSheet from './CategorySelectSheet';
import GenderSelectSheet from './GenderSelectSheet';

export const SHEETS = {
  CountrySelectSheet: 'CountrySelectSheet',
  CategorySelectSheet: 'CategorySelectSheet',
  GenderSelectSheet: 'GenderSelectSheet',
};

registerSheet(SHEETS.CountrySelectSheet, CountrySelectSheet);
registerSheet(SHEETS.CategorySelectSheet, CategorySelectSheet);
registerSheet(SHEETS.GenderSelectSheet, GenderSelectSheet);
