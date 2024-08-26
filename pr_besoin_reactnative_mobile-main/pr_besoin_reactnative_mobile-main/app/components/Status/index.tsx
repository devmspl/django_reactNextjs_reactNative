import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyText} from '../MyText';
import {COLORS, FONT_SIZE} from '../../styles';

export const STATUS_COLOR = {
  green: '#4FAA89',
  yellow: '#EA9411',
  red: '#F24E1E',
  blue: 'rgba(25, 118, 210, 1)',
};
type Props = {
  status: string;
  color: string;
};
const Status = ({status, color}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
        },
      ]}>
      <MyText size={FONT_SIZE.sm} color={COLORS.white}>
        {status}
      </MyText>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
});
