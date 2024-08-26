/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {ScrollView} from 'react-native';
import {MyText} from '../../components/MyText';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import PrimaryBtn from '../../components/PrimaryBtn';
import {View} from 'react-native';
import {FONT_WEIGHT} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';

const CreateResumeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Create CV" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <MyText
          bold={FONT_WEIGHT.bold}
          style={{marginTop: 20, marginBottom: 5}}>
          Create Your CV
        </MyText>
        <MyText>
          Creating your CV allows you to apply to multiple jobs fast from any
          device
        </MyText>
        <View style={{marginVertical: 30}}>
          <InputWrapper title="Name">
            <MyTextInput placeholder="Jessica Jung" />
          </InputWrapper>
          <InputWrapper title="Your job title or qualification">
            <MyTextInput placeholder="Type Here..." />
          </InputWrapper>
          <InputWrapper title="Your Location">
            <MyTextInput placeholder="Religion or country" />
          </InputWrapper>
        </View>
        <PrimaryBtn
          onPress={() => navigation.navigate('ProgressStartScreen')}
          containerStyle={{width: 120}}
          text="Create"
        />
      </ScrollView>
    </MainLayout>
  );
};

export default CreateResumeScreen;
