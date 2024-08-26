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
import {View} from 'react-native';
import DateInput from '../../components/inputs/DateInput';
import CardSvg from '../../../assets/svg/Card.svg';

const AddNewCardScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Add New Card" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: 20}}>
        <View style={{marginBottom: 30}}>
          <CardSvg />
        </View>
        <InputWrapper title="Card Name">
          <MyTextInput placeholder="Name" />
        </InputWrapper>
        <InputWrapper title="Card Number">
          <MyTextInput placeholder="1234 1234 1234 1234" />
        </InputWrapper>
        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{flex: 1}}>
            <InputWrapper title="Card Number">
              <DateInput placeholder="DD/MM/YY" />
            </InputWrapper>
          </View>
          <View style={{flex: 1}}>
            <InputWrapper title="CVV">
              <MyTextInput placeholder="123" />
            </InputWrapper>
          </View>
        </View>
      </ScrollView>
      <PrimaryBtn
        onPress={() => navigation.goBack()}
        text="Continue"
        containerStyle={{marginBottom: 20}}
      />
    </MainLayout>
  );
};

export default AddNewCardScreen;
