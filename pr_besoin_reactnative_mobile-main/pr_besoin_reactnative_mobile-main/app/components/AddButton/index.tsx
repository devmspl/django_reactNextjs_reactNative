import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AddButton = ({
  onPress,
  icon,
}: {
  onPress: () => void;
  icon?: React.ReactNode;
}) => {
  return (
    <TouchableOpacity style={styles.conatiner} onPress={onPress}>
      {icon ? (
        icon
      ) : (
        <AntDesign color={COLORS.lightGreen} name="plus" size={24} />
      )}
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  conatiner: {
    width: 35,
    height: 35,
    backgroundColor: '#4FAA891A',
    borderWidth: 0.3,
    borderColor: COLORS.lightGreen,
    borderRadius: 35 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
