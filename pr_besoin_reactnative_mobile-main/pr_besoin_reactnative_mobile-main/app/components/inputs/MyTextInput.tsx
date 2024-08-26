import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
type Props = {
  placeholder: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  inputProps?: TextInputProps;
};
const MyTextInput = ({
  placeholder,
  containerStyle,
  inputStyle,
  inputProps,
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput {...inputProps} style={inputStyle} placeholder={placeholder} />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
