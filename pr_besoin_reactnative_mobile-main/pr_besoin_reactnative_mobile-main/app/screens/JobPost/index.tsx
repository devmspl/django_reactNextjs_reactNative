import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import SelectInput from '../../components/inputs/SelectInput';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
const Radio = (props: {checked?: boolean}) => {
  return (
    <Pressable
      style={{
        width: 18,
        height: 18,
        borderRadius: 18 / 2,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: props.checked ? COLORS.lightGreen : COLORS.grey,
      }}>
      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 10,
          backgroundColor: props.checked ? COLORS.lightGreen : COLORS.white,
        }}
      />
    </Pressable>
  );
};

const Tag = (props: {isActive?: boolean; text: string}) => {
  return (
    <Pressable
      style={{
        backgroundColor: props.isActive ? COLORS.lightGreen : COLORS.lightgrey,
        flexDirection: 'row',
        height: 40,
        margin: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
      }}>
      <Feather
        name="plus"
        size={20}
        color={props.isActive ? COLORS.white : COLORS.grey}
      />
      <MyText color={props.isActive ? COLORS.white : COLORS.grey}>
        {props.text}
      </MyText>
    </Pressable>
  );
};

const JobPostScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader title="Job Post" leftArrowStyle={{left: 0}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InputWrapper title="Job title">
          <MyTextInput placeholder="Graphic Desginer" />
        </InputWrapper>
        <InputWrapper title="Location">
          <MyTextInput placeholder="London" />
        </InputWrapper>
        <InputWrapper title="What is the schedule for this job?">
          <View style={{flexDirection: 'row', marginVertical: 20, gap: 10}}>
            <Tag isActive text="Fix Schedule" />
            <Tag text="Flexible" />
          </View>
        </InputWrapper>
        <InputWrapper title="What is the job type?">
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginVertical: 20,
              gap: 10,
            }}>
            <Tag isActive text="Full Time" />
            <Tag text="Part Time" />
            <Tag text="Contract" />
            <Tag text="Temporary" />
            <Tag text="Internship" />
            <Tag text="Fresher" />
          </View>
        </InputWrapper>
        <InputWrapper title="Salary">
          <View style={{flexDirection: 'row', gap: 20}}>
            <View style={{flex: 1}}>
              <InputWrapper title="Min">
                <SelectInput placeholder="$ 1000" />
              </InputWrapper>
            </View>
            <View style={{flex: 1}}>
              <InputWrapper title="Max">
                <SelectInput placeholder="$ 8000" />
              </InputWrapper>
            </View>
          </View>
        </InputWrapper>
        <InputWrapper title="Job Description">
          <MyTextInput
            placeholder="type here..."
            inputProps={{multiline: true}}
            inputStyle={{height: 100, textAlignVertical: 'top'}}
            containerStyle={{height: 100}}
          />
        </InputWrapper>

        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <MyText
            color={COLORS.lightGreen}
            size={FONT_SIZE.lg}
            bold={FONT_WEIGHT.bold}>
            About The Company
          </MyText>
          <Feather name="edit" color={COLORS.lightGreen} size={20} />
        </View>

        <InputWrapper title="Company Name">
          <MyTextInput placeholder="Pixy Software" />
        </InputWrapper>

        <InputWrapper title="Company Website">
          <MyTextInput placeholder="www.Pixy.software" />
        </InputWrapper>
        <InputWrapper title="Founded">
          <MyTextInput placeholder="1992" />
        </InputWrapper>

        <InputWrapper title="About Company">
          <MyText size={FONT_SIZE.sm} style={{marginLeft: 5}}>
            Introduce your company to people in few words
          </MyText>
          <MyTextInput
            placeholder="type here..."
            inputProps={{multiline: true}}
            inputStyle={{height: 100, textAlignVertical: 'top'}}
            containerStyle={{height: 100}}
          />
        </InputWrapper>

        <InputWrapper title="How to Accept Application">
          <View style={{marginVertical: 15, flexDirection: 'row', gap: 15}}>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Radio checked={true} />
              <MyText color={COLORS.grey}>Email</MyText>
            </View>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Radio />
              <MyText color={COLORS.grey}>External Link</MyText>
            </View>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Radio />
              <MyText color={COLORS.grey}>Phone Number</MyText>
            </View>
          </View>
          <MyTextInput placeholder="Your Email Address" />
        </InputWrapper>
        <InputWrapper title="Do You require applications to submit a CV?">
          <View style={{marginVertical: 15, flexDirection: 'row', gap: 15}}>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Radio checked={true} />
              <MyText color={COLORS.grey}>Yes</MyText>
            </View>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Radio />
              <MyText color={COLORS.grey}>No</MyText>
            </View>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Radio />
              <MyText color={COLORS.grey}>Optional</MyText>
            </View>
          </View>
        </InputWrapper>

        <View style={{paddingVertical: 20}}>
          <PrimaryBtn
            text="Preview"
            onPress={() =>
              navigation.navigate('JobDetail', {
                mode: 'Preview',
              })
            }
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default JobPostScreen;

const styles = StyleSheet.create({});
