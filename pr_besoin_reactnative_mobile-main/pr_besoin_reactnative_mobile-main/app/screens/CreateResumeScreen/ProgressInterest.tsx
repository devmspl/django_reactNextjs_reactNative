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
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import FormProgress from '../../components/FormProgress';
import Chip from '../../components/inputs/Chip';

const ProgressIntrest = () => {
  const naviagtion =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const data = ['Tracking', 'Badmintion'];
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Create CV" />
      <FormProgress percent={84} step={3} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <MyText
          size={FONT_SIZE.xl}
          bold={FONT_WEIGHT.bold}
          style={{marginBottom: 20}}>
          Interest
        </MyText>
        <InputWrapper title="Interest">
          <MyTextInput placeholder="type here" />
        </InputWrapper>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {data.map((item, key) => {
            return <Chip key={key} text={item} />;
          })}
        </View>
      </ScrollView>

      <RenderBtns
        onNextPress={() => naviagtion.navigate('ResumeCreatedDone')}
        onSavePress={() => {}}
        onBackPress={naviagtion.goBack}
      />
    </MainLayout>
  );
};

export default ProgressIntrest;
