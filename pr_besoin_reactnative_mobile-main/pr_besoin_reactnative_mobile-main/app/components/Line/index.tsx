import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles';
type Props = {
  color?: string;
  containerStyle?: StyleProp<ViewStyle>;
};
const Line = ({color, containerStyle}: Props) => {
  return (
    <View
      style={[
        styles.line,
        {
          backgroundColor: color ? color : COLORS.black,
        },
        containerStyle,
      ]}
    />
  );
};

export default Line;

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
  },
});
