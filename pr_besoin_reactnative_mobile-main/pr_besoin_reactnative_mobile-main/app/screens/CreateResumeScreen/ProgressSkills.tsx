/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {ScrollView} from 'react-native';
import {FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import {MyText} from '../../components/MyText';
import {RenderBtns} from './ProgressStart';
import FormProgress from '../../components/FormProgress';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import Chip from '../../components/inputs/Chip';
import {View} from 'react-native';

const ProgressSkill = () => {
  const naviagtion =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const data = ['Python', 'C++', 'HTML/CSS'];
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Create CV" />
      <FormProgress percent={26} step={2} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <MyText
          size={FONT_SIZE.xl}
          bold={FONT_WEIGHT.bold}
          style={{marginBottom: 20}}>
          Skill
        </MyText>
        <InputWrapper title="Your Skill">
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
        onSavePress={() => {}}
        onBackPress={naviagtion.goBack}
        onNextPress={() => naviagtion.navigate('ProgressLanguageScreen')}
      />
    </MainLayout>
  );
};

export default ProgressSkill;
