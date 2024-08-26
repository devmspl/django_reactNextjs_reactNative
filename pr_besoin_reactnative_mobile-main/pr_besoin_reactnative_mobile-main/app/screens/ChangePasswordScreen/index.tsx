/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';

const ChangePasswordScreen = () => {
  return (
    <MainLayout headerComp={<MainHeader title="Change Password" />}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <InputWrapper title="Old Password">
          <MyTextInput placeholder="********" />
        </InputWrapper>
        <InputWrapper title="New Password">
          <MyTextInput placeholder="********" />
        </InputWrapper>
        <InputWrapper title="Confirm Password">
          <MyTextInput placeholder="********" />
        </InputWrapper>
      </ScrollView>
      <View style={{padding: 10}}>
        <PrimaryBtn text="Update" />
      </View>
    </MainLayout>
  );
};

export default ChangePasswordScreen;
