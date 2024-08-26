import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Check from '../../../assets/svg/checkbox.svg';
import {COLORS} from '../../styles';

type Props = {
  accentColor?: string;
};
const CheckBox = ({accentColor}: Props) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setIsCheck(!isCheck)}
      style={[
        styles.container,
        accentColor
          ? {
              backgroundColor: accentColor,
            }
          : {},
      ]}>
      <Check />
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    width: 15,
    height: 15,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
