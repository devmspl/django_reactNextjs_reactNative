import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONT_WEIGHT} from '../../styles';
import {MyText} from '../MyText';

type Props = {
  text: string;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const SecondaryBtn = ({text, onPress, containerStyle, textStyle}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <MyText
        style={textStyle}
        center
        bold={FONT_WEIGHT.semibold}
        color={COLORS.black}>
        {text}
      </MyText>
    </TouchableOpacity>
  );
};

export default SecondaryBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(245, 245, 245, 1)',
    padding: 15,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 15,
  },
});
