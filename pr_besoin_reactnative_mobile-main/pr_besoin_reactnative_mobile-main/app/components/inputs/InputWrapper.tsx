import React from 'react';
import {MyText} from '../MyText';
import {StyleSheet, View} from 'react-native';
import {FONT_SIZE, FONT_WEIGHT} from '../../styles';
type Props = {
  children: React.ReactNode;
  title: string;
  optional?: boolean;
};
const InputWrapper = ({children, title, optional = false}: Props) => {
  return (
    <View>
      <View style={styles.textBox}>
        <MyText
          style={styles.title}
          size={FONT_SIZE.base}
          bold={FONT_WEIGHT.semibold}>
          {title}
        </MyText>
        {optional && (
          <MyText style={styles.title} size={FONT_SIZE.base}>
            {'(Optional)'}
          </MyText>
        )}
      </View>
      <View>{children}</View>
    </View>
  );
};

export default InputWrapper;

const styles = StyleSheet.create({
  title: {
    marginLeft: 5,
  },
  textBox: {flexDirection: 'row'},
});
