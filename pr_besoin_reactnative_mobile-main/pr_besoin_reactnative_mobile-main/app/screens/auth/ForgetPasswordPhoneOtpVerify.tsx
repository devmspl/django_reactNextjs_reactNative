import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE} from '../../styles';
import OTPInput from '../../components/inputs/OtpInput';
import {useNavigation} from '@react-navigation/native';

const ForgetPasswordPhoneOtpVerify = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const handleVerify = () => {
    console.log(code);
    // @ts-ignore
    navigation.navigate('ResetPassword');
  };
  return (
    <MainLayout
      headerComp={<MainHeader onBackPress={navigation.goBack} title="OTP" />}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <MyText center color={COLORS.grey} size={FONT_SIZE.lg}>
            Enter 4 digit verification code we send to your phone number
          </MyText>
          <OTPInput onOTPChange={setCode} />
        </View>
      </ScrollView>
      <View style={styles.nextBtnBox}>
        <PrimaryBtn onPress={handleVerify} text="Verify" />
      </View>
    </MainLayout>
  );
};

export default ForgetPasswordPhoneOtpVerify;

const styles = StyleSheet.create({
  innerContainer: {marginTop: 30, gap: 20, padding: 10},
  nextBtnBox: {marginBottom: 20},
});
