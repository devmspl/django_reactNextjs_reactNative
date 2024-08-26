import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONT_SIZE} from '../../../styles';
import FliterSvg from '../../../../assets/icons/Filter.svg';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../naviagtion/types';
const SearchBox = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const {APP_MODE} = useSelector((s: RootState) => s.app);
  return (
    <View style={styles.inputWrapper}>
      <AntDesign size={20} name="search1" color={COLORS.grey} />
      <TextInput
        style={styles.input}
        placeholder="Search here..."
        onFocus={() => {
          navigation.navigate('SearchCandidate');
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(
            APP_MODE === 'Company' ? 'SearchSkill' : 'FilterScreen',
          );
        }}>
        <FliterSvg />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.grey,
    paddingHorizontal: 20,
  },
  input: {flex: 1, fontSize: FONT_SIZE.base, paddingHorizontal: 10},
});
