import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import HideSvg from '../../../assets/svg/eye-hide.svg';
type Props = {
  placeholder: string;
};
const PasswordInput = ({placeholder}: Props) => {
  const [isTextHidden, setIsTextHidden] = useState(true);
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} secureTextEntry={isTextHidden} />
      <TouchableOpacity
        style={styles.showHideBtn}
        onPress={() => setIsTextHidden(!isTextHidden)}>
        <HideSvg />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  showHideBtn: {
    position: 'absolute',
    right: 20,
  },
});
