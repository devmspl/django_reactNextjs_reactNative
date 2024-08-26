import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';

const options = [
  'English',
  'Chinese',
  'Hindi',
  'Portuguese',
  'Spanish',
  'Arabic',
  'Bulgarian',
  'French',
  'Rissian',
];
const ChooseLanguageScreen = () => {
  const [selectedOption, setSelectedOption] = useState('English');

  return (
    <MainLayout>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.textWrapper}>
          <MyText size={FONT_SIZE['1.5xl']} bold={FONT_WEIGHT.semibold}>
            Hi Jessica
          </MyText>
          <MyText color={COLORS.grey}>
            Please choose your preferred language to facilitate communication
          </MyText>
        </View>
        <View style={styles.optionContainer}>
          {options.map(item => {
            const isActive = selectedOption === item;
            return (
              <TouchableOpacity
                key={item}
                onPress={() => setSelectedOption(item)}
                style={[
                  styles.option,
                  {
                    backgroundColor: isActive
                      ? COLORS.lightGreen
                      : COLORS.lightgrey,
                  },
                ]}>
                <MyText color={isActive ? COLORS.white : COLORS.grey}>
                  {item}
                </MyText>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.nextBtnBox}>
        <PrimaryBtn text="Next" />
      </View>
    </MainLayout>
  );
};

export default ChooseLanguageScreen;

const styles = StyleSheet.create({
  textWrapper: {padding: 20, marginTop: hp(10), gap: 10, marginBottom: 20},
  nextBtnBox: {marginBottom: 20},
  optionContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  option: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
});
