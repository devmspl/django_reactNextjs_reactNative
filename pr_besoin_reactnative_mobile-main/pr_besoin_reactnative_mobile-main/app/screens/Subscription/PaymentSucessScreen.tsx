/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {FONT_SIZE, FONT_WEIGHT} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import PaymentSuccessSvg from '../../../assets/illustration/PaymentSuccess.svg';

const PaymentSuccessScreen = () => {
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Payment Sucess" />
      <PaymentSuccessSvg />
      <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE['3xl']} center>
        Payment successful
      </MyText>
      <MyText center>Enjoy your membership</MyText>
      <PrimaryBtn
        containerStyle={{marginBottom: 20, marginTop: 'auto'}}
        text="DONE"
      />
    </MainLayout>
  );
};

export default PaymentSuccessScreen;
