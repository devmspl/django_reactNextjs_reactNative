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
import CheckBox from '../../components/inputs/CheckBox';
import MyTextInput from '../../components/inputs/MyTextInput';
import SelectInput from '../../components/inputs/SelectInput';

const ProgressCertificates = () => {
  const naviagtion =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Create CV" />
      <FormProgress percent={40} step={2} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <MyText
          size={FONT_SIZE.xl}
          bold={FONT_WEIGHT.bold}
          style={{marginBottom: 20}}>
          Certifications
        </MyText>
        <InputWrapper title="Title">
          <MyTextInput placeholder="type here" />
        </InputWrapper>

        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{flex: 1}}>
            <InputWrapper title="Start">
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
          <MyText bold={FONT_WEIGHT.semibold}>Dosen't Expire</MyText>
        </View>

        <InputWrapper title="Description">
          <MyTextInput
            inputProps={{
              multiline: true,
            }}
            containerStyle={{height: 100}}
            inputStyle={{textAlignVertical: 'top', height: '100%'}}
            placeholder="About your Certification"
          />
        </InputWrapper>
      </ScrollView>
      <RenderBtns
        onSavePress={() => {}}
        onBackPress={naviagtion.goBack}
        onNextPress={() => naviagtion.navigate('ProgressAwardsScreen')}
      />
    </MainLayout>
  );
};

export default ProgressCertificates;
