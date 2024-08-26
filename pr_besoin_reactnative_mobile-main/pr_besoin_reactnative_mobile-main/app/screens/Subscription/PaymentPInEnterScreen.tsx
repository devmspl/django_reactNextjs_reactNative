/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../naviagtion/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PrimaryBtn from '../../components/PrimaryBtn';
import {MyText} from '../../components/MyText';
import {COLORS} from '../../styles';
import OTPInput from '../../components/inputs/OtpInput';

const PaymentPinEnterScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Enter Pin" />
      <MyText color={COLORS.grey} center>
        Enter 4 digit verification code we sent to your phone number
      </MyText>
      <View style={{marginTop: 100}}>
        <OTPInput onOTPChange={() => {}} />
      </View>
      <PrimaryBtn
        onPress={() => navigation.navigate('PaymentSuccess')}
        text="Continue"
        containerStyle={{marginBottom: 20, marginTop: 'auto'}}
      />
    </MainLayout>
  );
};

export default PaymentPinEnterScreen;
