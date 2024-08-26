import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, FONT_WEIGHT} from '../../styles';
import MyTextInput from '../../components/inputs/MyTextInput';
import InputWrapper from '../../components/inputs/InputWrapper';
import PasswordInput from '../../components/inputs/PasswordInput';
import PrimaryBtn from '../../components/PrimaryBtn';
import Line from '../../components/Line';
import {MyText} from '../../components/MyText';
import CheckBox from '../../components/inputs/CheckBox';
import PhoneInput from '../../components/inputs/PhoneInput';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View>
        <InputWrapper title={'Name'}>
          <MyTextInput placeholder={'Jessica Jung'} />
        </InputWrapper>
        <InputWrapper title={'Email'}>
          <MyTextInput placeholder={'Jessica@gmail.com'} />
        </InputWrapper>
        <InputWrapper title={'Phone'}>
          <PhoneInput placeholder={'1234567890'} />
        </InputWrapper>
        <InputWrapper title={'Password'}>
          <PasswordInput placeholder={'***********'} />
        </InputWrapper>
        <InputWrapper title={'Confirm Password'}>
          <PasswordInput placeholder={'**********'} />
        </InputWrapper>
        <InputWrapper title={'Refer code'} optional>
          <MyTextInput placeholder={''} />
        </InputWrapper>
      </View>
      <View style={styles.rememberMeSection}>
        <View style={styles.rememberMeSectionLeft}>
          <CheckBox accentColor={COLORS.lightGreen} />
          <MyText color={COLORS.black}>
            I agree to the{' '}
            <MyText color={COLORS.lightGreen}>Terms of Services</MyText> &{' '}
            <MyText color={COLORS.lightGreen}>Privacy Policy</MyText>
          </MyText>
        </View>
      </View>
      <View>
        <PrimaryBtn
          onPress={() => navigation.navigate('PersonalInfo')}
          text="Register"
        />
      </View>

      <View style={styles.logintextbox}>
        <MyText center bold={FONT_WEIGHT.semibold}>
          Have any account?
          <MyText
            bold={FONT_WEIGHT.normal}
            color={COLORS.lightGreen}
            style={styles.logintext}>
            {' Login'}
          </MyText>
        </MyText>
      </View>

      <View style={[styles.orBox]}>
        <Line color={'lightgrey'} />
        <MyText color={COLORS.grey}>Or continue with</MyText>
        <Line color={'lightgrey'} />
      </View>
      <View style={styles.socialSection}>
        <View style={styles.socialBox}>
          <Image
            source={require('../../../assets/images/fb.png')}
            style={styles.socialImg}
          />
        </View>
        <View style={styles.socialBox}>
          <Image
            source={require('../../../assets/images/google.png')}
            style={styles.socialImg}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
  },
  orBox: {flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 20},
  socialSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
    margin: 20,
    alignItems: 'center',
  },
  socialBox: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 20,
    borderRadius: 20,
  },
  socialImg: {
    width: 20,
    height: 20,
  },
  rememberMeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rememberMeSectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  logintextbox: {marginTop: 15},
  logintext: {textDecorationLine: 'underline'},
});
