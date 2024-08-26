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
import AddButton from '../../components/AddButton';

const ProgressAccadmicQualification = () => {
  const naviagtion =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Create CV" />
      <FormProgress percent={16} step={1} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <MyText
          size={FONT_SIZE.xl}
          bold={FONT_WEIGHT.bold}
          style={{marginBottom: 20}}>
          Academic Qualification
        </MyText>
        <InputWrapper title="Exame/Degree Title">
          <SelectInput placeholder="Enter here" />
        </InputWrapper>
        <InputWrapper title="Institute Name">
          <MyTextInput placeholder="National Institute" />
        </InputWrapper>

        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{flex: 1}}>
            <InputWrapper title="Result">
              <MyTextInput placeholder="type" />
            </InputWrapper>
          </View>
          <View style={{flex: 1}}>
            <InputWrapper title="Passing Year">
              <SelectInput placeholder="Year" />
            </InputWrapper>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 10,
          }}>
          <AddButton onPress={() => {}} />
          <MyText bold={FONT_WEIGHT.semibold}>Add Acadamic</MyText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 10,
          }}>
          <AddButton onPress={() => {}} />
          <MyText bold={FONT_WEIGHT.semibold}>Training certificate</MyText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 10,
          }}>
          <AddButton onPress={() => {}} />
          <MyText bold={FONT_WEIGHT.semibold}>
            Personal Certification Summary
          </MyText>
        </View>
      </ScrollView>
      <RenderBtns
        onSavePress={() => {}}
        onBackPress={naviagtion.goBack}
        onNextPress={() => naviagtion.navigate('ProgressLocationScreen')}
      />
    </MainLayout>
  );
};

export default ProgressAccadmicQualification;
