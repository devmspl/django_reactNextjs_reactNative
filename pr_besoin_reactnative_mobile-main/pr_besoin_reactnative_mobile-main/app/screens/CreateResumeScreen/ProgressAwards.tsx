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
import SelectInput from '../../components/inputs/SelectInput';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';

const ProgressAwards = () => {
  const naviagtion =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Create CV" />
      <FormProgress percent={50} step={3} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <MyText
          size={FONT_SIZE.xl}
          bold={FONT_WEIGHT.bold}
          style={{marginBottom: 20}}>
          Awards
        </MyText>
        <InputWrapper title="Title">
          <SelectInput placeholder="type here" />
        </InputWrapper>

        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{flex: 1}}>
            <InputWrapper title="Date">
              <SelectInput placeholder="Month" />
            </InputWrapper>
          </View>
          <View style={{flex: 1}}>
            <InputWrapper title="">
              <SelectInput placeholder="Year" />
            </InputWrapper>
          </View>
        </View>

        <InputWrapper title="Description">
          <MyTextInput
            inputProps={{
              multiline: true,
            }}
            containerStyle={{height: 100}}
            inputStyle={{textAlignVertical: 'top', height: '100%'}}
            placeholder="About yourself"
          />
        </InputWrapper>
      </ScrollView>
      <RenderBtns
        onSavePress={() => {}}
        onBackPress={naviagtion.goBack}
        onNextPress={() => naviagtion.navigate('ProgressLinksScreen')}
      />
    </MainLayout>
  );
};

export default ProgressAwards;
