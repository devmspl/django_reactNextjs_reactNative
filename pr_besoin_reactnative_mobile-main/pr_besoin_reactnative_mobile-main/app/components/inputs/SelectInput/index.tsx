import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {MyText} from '../../MyText';
import {COLORS} from '../../../styles';
import Entypo from 'react-native-vector-icons/Entypo';
type Props = {
  placeholder: string;
  value?: string;
  onPress?: () => void;
};
const SelectInput = ({placeholder, onPress, value}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.flagBox}>
        {value ? (
          <MyText color={COLORS.black}>{value}</MyText>
        ) : (
          <MyText color={COLORS.grey}>{placeholder}</MyText>
        )}
      </View>
      <Entypo name="chevron-down" size={24} style={styles.iconStyle} />
    </TouchableOpacity>
  );
};

export default SelectInput;

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
  flagBox: {flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1},
  iconStyle: {opacity: 0.3},
});
