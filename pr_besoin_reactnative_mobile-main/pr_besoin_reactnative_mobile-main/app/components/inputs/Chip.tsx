/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {MyText} from '../MyText';
import {COLORS, FONT_SIZE} from '../../styles';

const Chip = ({text}: {text: string}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.lightGreen,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: 5,
        width: '30%',
      }}>
      <MyText color={COLORS.white} size={FONT_SIZE.sm}>
        {text}
      </MyText>
    </View>
  );
};

export default Chip;
