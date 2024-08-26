/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {ScrollView, View} from 'react-native';
import {FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import {MyText} from '../../components/MyText';
import {RenderBtns} from './ProgressStart';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import PhoneInput from '../../components/inputs/PhoneInput';
import DateInput from '../../components/inputs/DateInput';
import SelectInput from '../../components/inputs/SelectInput';
import FormProgress from '../../components/FormProgress';

const ProgressPersonalDetail = () => {
  const naviagtion =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Create CV" />
      <FormProgress percent={8} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <MyText
          size={FONT_SIZE.xl}
          bold={FONT_WEIGHT.bold}
          style={{marginBottom: 20}}>
          Personal Details
        </MyText>
        <InputWrapper title="Full Name">
          <MyTextInput placeholder="Your Name" />
        </InputWrapper>

        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{flex: 1}}>
            <InputWrapper title="Father's Name">
              <MyTextInput placeholder="Enter Name" />
            </InputWrapper>
          </View>
          <View style={{flex: 1}}>
            <InputWrapper title="Mother's Name">
              <MyTextInput placeholder="Enter Name" />
            </InputWrapper>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{flex: 1}}>
            <InputWrapper title="Start Date">
              <DateInput
                value={startDate}
                onSelect={setStartDate}
                placeholder="MM/DD/YYY"
              />
            </InputWrapper>
          </View>
          <View style={{flex: 1}}>
            <InputWrapper title="End Date">
              <DateInput
                value={endDate}
                onSelect={setEndDate}
                placeholder="MM/DD/YYY"
              />
            </InputWrapper>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{flex: 1}}>
            <InputWrapper title="Religion">
              <SelectInput placeholder="Select" />
            </InputWrapper>
          </View>
          <View style={{flex: 1}}>
            <InputWrapper title="Married">
              <SelectInput placeholder="Select" />
            </InputWrapper>
          </View>
        </View>
        <InputWrapper title="Nationality">
          <MyTextInput placeholder="Hindu" />
        </InputWrapper>
        <InputWrapper title="National ID">
          <MyTextInput placeholder="Hindu" />
        </InputWrapper>
        <InputWrapper title="Phone Number">
          <PhoneInput placeholder="122 456 7890" />
        </InputWrapper>
        <InputWrapper title="Email Address">
          <MyTextInput placeholder="example@gmail.com" />
        </InputWrapper>
        <InputWrapper title="Description">
          <MyTextInput placeholder="About Yourself" />
        </InputWrapper>
      </ScrollView>
      <RenderBtns
        onBackPress={naviagtion.goBack}
        onNextPress={() => naviagtion.navigate('ProgressExperienceScreen')}
      />
    </MainLayout>
  );
};

export default ProgressPersonalDetail;
