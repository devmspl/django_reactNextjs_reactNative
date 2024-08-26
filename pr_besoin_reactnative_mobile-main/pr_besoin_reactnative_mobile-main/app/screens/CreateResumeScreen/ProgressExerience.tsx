/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {ScrollView, View} from 'react-native';
import {FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import {MyText} from '../../components/MyText';
import {RenderBtns} from './ProgressStart';
import FormProgress from '../../components/FormProgress';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import SelectInput from '../../components/inputs/SelectInput';
import CheckBox from '../../components/inputs/CheckBox';
import AddButton from '../../components/AddButton';

const ProgressExperience = () => {
  const naviagtion =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Create CV" />
      <FormProgress percent={12} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <MyText
          size={FONT_SIZE.xl}
          bold={FONT_WEIGHT.bold}
          style={{marginBottom: 20}}>
          Experience
        </MyText>
        <InputWrapper title="Company Name">
          <MyTextInput placeholder="type here" />
        </InputWrapper>
        <InputWrapper title="Company Business">
          <MyTextInput placeholder="type here" />
        </InputWrapper>
        <InputWrapper title="Your Job Title">
          <MyTextInput placeholder="type here" />
        </InputWrapper>
        <InputWrapper title="Department">
          <MyTextInput placeholder="type here" />
        </InputWrapper>
        <InputWrapper title="Job Location">
          <SelectInput placeholder="United State" />
        </InputWrapper>

        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{flex: 1}}>
            <InputWrapper title="Employment Period">
              <SelectInput placeholder="Month" />
            </InputWrapper>
          </View>
          <View style={{flex: 1}}>
            <InputWrapper title="">
              <SelectInput placeholder="Year" />
            </InputWrapper>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{flex: 1}}>
            <InputWrapper title="End">
              <SelectInput placeholder="Month" />
            </InputWrapper>
          </View>
          <View style={{flex: 1}}>
            <InputWrapper title="">
              <SelectInput placeholder="Year" />
            </InputWrapper>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 15,
            marginBottom: 20,
          }}>
          <CheckBox />
          <MyText bold={FONT_WEIGHT.semibold}>I currently work here</MyText>
        </View>

        <InputWrapper title="Responsibilities / Objective">
          <MyTextInput
            inputProps={{
              multiline: true,
            }}
            containerStyle={{height: 100}}
            inputStyle={{textAlignVertical: 'top', height: '100%'}}
            placeholder="About your postion"
          />
        </InputWrapper>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 10,
          }}>
          <AddButton onPress={() => {}} />
          <MyText bold={FONT_WEIGHT.semibold}>Add Experience</MyText>
        </View>
      </ScrollView>
      <RenderBtns
        onSavePress={() => {}}
        onBackPress={naviagtion.goBack}
        onNextPress={() =>
          naviagtion.navigate('ProgressAccadmicQualificationScreen')
        }
      />
    </MainLayout>
  );
};

export default ProgressExperience;
