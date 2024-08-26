import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import MainHeader from '../../components/layout/MainHeader';
import {ScrollView} from 'react-native';
import InputWrapper from '../../components/inputs/InputWrapper';
import SelectInput from '../../components/inputs/SelectInput';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE} from '../../styles';

const data = ['Full Time', 'Part Time', 'Contract', 'Freelance'];
const FilterScreen = () => {
  return (
    <MainLayout>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <MainHeader leftArrowStyle={{left: 0}} title="Apply Filter" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <InputWrapper title="Category">
          <SelectInput placeholder="Pick Category" value="UI/UX Desgin" />
        </InputWrapper>
        <InputWrapper title="Sub - Category">
          <SelectInput
            placeholder="Pick Sub-Category"
            value="Graphics Design"
          />
        </InputWrapper>
        <InputWrapper title="Salary">
          <SelectInput placeholder="Pick Salary Range" value="$8k - $16k" />
        </InputWrapper>
        <InputWrapper title="Job Type">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => {
              const active = item === 'Full Time';
              return (
                <TouchableOpacity
                  style={[
                    styles.item,
                    {
                      backgroundColor: active
                        ? COLORS.lightGreen
                        : COLORS.lightgrey,
                    },
                  ]}>
                  <MyText
                    color={active ? COLORS.white : COLORS.black}
                    size={FONT_SIZE.sm}>
                    {item}
                  </MyText>
                </TouchableOpacity>
              );
            }}
          />
        </InputWrapper>
      </ScrollView>
      <View style={styles.btnContainer}>
        <PrimaryBtn text="Apply Filter" />
      </View>
    </MainLayout>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  btnContainer: {
    marginBottom: 20,
  },
  item: {
    marginRight: 20,
    marginVertical: 20,
    paddingVertical: 10,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});
