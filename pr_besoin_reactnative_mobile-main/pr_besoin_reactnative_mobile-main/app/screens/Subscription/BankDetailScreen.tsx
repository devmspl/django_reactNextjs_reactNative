/* eslint-disable react-native/no-inline-styles */
import {ScrollView} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';

const BankDetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Bank Details" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: 20}}>
        <InputWrapper title="Select Bank">
          <MyTextInput placeholder="Select Bank" />
        </InputWrapper>
        <InputWrapper title="Account Holder Name">
          <MyTextInput placeholder="Name" />
        </InputWrapper>
        <InputWrapper title="Account Number">
          <MyTextInput placeholder="Number" />
        </InputWrapper>
        <InputWrapper title="Confirm Account Number">
          <MyTextInput placeholder="Number" />
        </InputWrapper>
        <InputWrapper title="IFSC Number">
          <MyTextInput placeholder="Number" />
        </InputWrapper>
        <InputWrapper title="Type of Account">
          <MyTextInput placeholder="Type" />
        </InputWrapper>
      </ScrollView>
      <PrimaryBtn
        onPress={() => navigation.navigate('PaymentPinEnter')}
        text="Continue"
        containerStyle={{marginBottom: 20}}
      />
    </MainLayout>
  );
};

export default BankDetailScreen;
