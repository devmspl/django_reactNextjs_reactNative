import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {MyText} from '../MyText';
import {countries} from '../../utils/countryTable';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
type Props = {
  placeholder: string;
};
const PhoneInput = ({placeholder}: Props) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const onFlagPress = () => {
    SheetManager.show(SHEETS.CountrySelectSheet, {
      // @ts-ignore
      payload: {
        onSelect: setSelectedCountry,
      },
    });
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <TouchableOpacity onPress={onFlagPress} style={styles.flagBox}>
          <MyText>{selectedCountry.emoji}</MyText>
          <MyText>{selectedCountry.tel} </MyText>
        </TouchableOpacity>
        <TextInput keyboardType="phone-pad" placeholder={placeholder} />
      </View>
    </React.Fragment>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  flagBox: {flexDirection: 'row', alignItems: 'center', gap: 10},
});
