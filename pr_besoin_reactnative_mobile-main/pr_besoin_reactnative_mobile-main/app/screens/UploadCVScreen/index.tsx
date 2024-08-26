/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import SecondaryBtn from '../../components/SecondarBtn';
import MainHeader from '../../components/layout/MainHeader';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const UploadCVScreen = () => {
  return (
    <MainLayout headerComp={<MainHeader title="Upload CV" />}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <InputWrapper title="Name">
          <MyTextInput placeholder="Jessica Jung" />
        </InputWrapper>
        <InputWrapper title="Email Address">
          <MyTextInput placeholder="jessica@gmail.com" />
        </InputWrapper>
        <InputWrapper title="Location">
          <MyTextInput placeholder="United State" />
        </InputWrapper>
        <InputWrapper title="Upload your CV">
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              padding: 10,
              borderWidth: 1,
              borderColor: 'lightgrey',
              marginVertical: 10,
              borderRadius: 10,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../../../assets/images/pdf.png')} />
            </View>
            <View style={{flex: 1}}>
              <MyText bold={FONT_WEIGHT.semibold}>Jessica1.pdf</MyText>
              <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                705 KB . Last used on 09/09/2023
              </MyText>
            </View>
            <View style={{gap: 5}}>
              <AntDesign size={20} color={COLORS.red} name="delete" />
              <Ionicons size={20} color={COLORS.lightGreen} name="add-circle" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              padding: 10,
              borderWidth: 1,
              borderColor: 'lightgrey',
              marginVertical: 10,
              borderRadius: 10,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'rgba(79, 170, 137, 0.1)',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign size={20} color={COLORS.lightGreen} name="plus" />
            </View>
            <MyText bold={FONT_WEIGHT.semibold}>Add ANOTHER CV</MyText>
          </View>
        </InputWrapper>
      </ScrollView>
      <View style={{flexDirection: 'row', gap: 20, paddingBottom: 10}}>
        <SecondaryBtn containerStyle={{flex: 1}} text="Cancel" />
        <PrimaryBtn containerStyle={{flex: 1}} text="Upload" />
      </View>
    </MainLayout>
  );
};

export default UploadCVScreen;
