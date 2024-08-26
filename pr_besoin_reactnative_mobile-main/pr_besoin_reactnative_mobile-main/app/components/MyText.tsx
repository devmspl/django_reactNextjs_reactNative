import React from 'react';
import {StyleProp, TextStyle, Text, TextProps} from 'react-native';
import {FONT_SIZE} from '../styles';

interface TextProp extends TextProps {
  children: string | React.ReactNode;
  style?: StyleProp<TextStyle>;
  bold?: TextStyle['fontWeight'];
  size?: number;
  center?: boolean;
  color?: TextStyle['color'];
}

export const MyText = ({
  children,
  style,
  bold,
  size,
  color,
  center,
  ...rest
}: TextProp) => {
  return (
    <Text
      {...rest}
      style={[
        {
          // fontFamily: FONT_FAMILY.Mulish.name,
          fontSize: size ? size : FONT_SIZE.base,
          fontWeight: bold,
          color: color ? color : '#222',
          textAlign: center ? 'center' : 'auto',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
