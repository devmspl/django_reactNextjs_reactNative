import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp, wp} from '../../styles';
import {MyText} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';
import CardArrowOneSvg from '../../../assets/svg/CardArrowOne.svg';
import CardArrowTwoSvg from '../../../assets/svg/CardArrowTwo.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {setAppMode} from '../../redux/features/app/appSlice';

const WelcomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [mode, setMode] = useState('Candidate');

  const handleContinue = () => {
    // @ts-ignore
    dispatch(setAppMode(mode));
    navigation.navigate('LoginRegister');
  };
  return (
    <View style={styles.conatiner}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.conatiner}>
        <View style={styles.section1}>
          <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE.xl}>
            Continue as
          </MyText>
          <MyText style={{maxWidth: wp(80)}} center color={COLORS.grey}>
            To continue to the next page, please select which one you are
          </MyText>
        </View>
        <View>
          <Pressable
            onPress={() => setMode('Candidate')}
            style={
              mode === 'Candidate'
                ? [styles.card, styles.card1]
                : [styles.card, {backgroundColor: COLORS.lightgrey}]
            }>
            <MyText
              size={FONT_SIZE.lg}
              color={mode === 'Candidate' ? COLORS.white : COLORS.lightGreen}
              bold={FONT_WEIGHT.semibold}>
              Candidate
            </MyText>
            <MyText
              color={mode === 'Candidate' ? COLORS.white : COLORS.lightGreen}>
              Finding a Project here never
            </MyText>
            <MyText
              color={mode === 'Candidate' ? COLORS.white : COLORS.lightGreen}>
              been easier thab befor
            </MyText>
            {mode === 'Candidate' ? (
              <CardArrowTwoSvg style={styles.cardArrow} />
            ) : (
              <CardArrowOneSvg style={styles.cardArrow} />
            )}
          </Pressable>
          <Pressable
            onPress={() => setMode('Company')}
            style={
              mode === 'Company'
                ? [styles.card, styles.card1]
                : [styles.card, {backgroundColor: COLORS.lightgrey}]
            }>
            <MyText
              bold={FONT_WEIGHT.semibold}
              size={FONT_SIZE.lg}
              color={mode === 'Company' ? COLORS.white : COLORS.lightGreen}>
              Company
            </MyText>
            <MyText
              color={mode === 'Company' ? COLORS.white : COLORS.lightGreen}>
              Let’s recruit your great{' '}
            </MyText>
            <MyText
              color={mode === 'Company' ? COLORS.white : COLORS.lightGreen}>
              candidate faster here{' '}
            </MyText>
            {mode === 'Company' ? (
              <CardArrowTwoSvg style={styles.cardArrow} />
            ) : (
              <CardArrowOneSvg style={styles.cardArrow} />
            )}
          </Pressable>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <PrimaryBtn text={'Continue'} onPress={handleContinue} />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  section1: {
    marginTop: hp(20),
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  card: {
    paddingLeft: 30,
    paddingVertical: 30,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    gap: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginBottom: 5,
  },
  card1: {
    backgroundColor: COLORS.lightGreen,
  },
  cardArrow: {position: 'absolute', right: 0},
});
