import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import RightArrowSvg from '../../../assets/svg/RigthArrow.svg';
import {COLORS} from '../../styles';
const NextBtn = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.conatiner} onPress={onPress}>
      <RightArrowSvg />
    </TouchableOpacity>
  );
};

export default NextBtn;

const styles = StyleSheet.create({
  conatiner: {
    width: 35,
    height: 35,
    backgroundColor: COLORS.black,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
