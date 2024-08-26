/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {Image, TextInput, View} from 'react-native';
import {MyText} from '../../components/MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import Status, {STATUS_COLOR} from '../../components/Status';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const SectionOne = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1,
        paddingBottom: 20,
      }}>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: COLORS.lightgrey,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/images/animater.png')}
          style={{
            width: 50,
            height: 50,
            borderRadius: 20,
          }}
        />
      </View>
      <View style={{gap: 5}}>
        <MyText bold={FONT_WEIGHT.semibold}>3D Animator</MyText>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
            Complex Studio
          </MyText>
          <Entypo name="location-pin" color={COLORS.lightGreen} size={15} />
          <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
            349 Irvine, CA
          </MyText>
        </View>
        <Status color={STATUS_COLOR.green} status="Completed" />
      </View>
    </View>
  );
};

const SectionTwo = () => {
  return (
    <View style={{gap: 10, marginTop: 20}}>
      <MyText
        color={COLORS.black}
        size={FONT_SIZE.lg}
        bold={FONT_WEIGHT.semibold}>
        Description
      </MyText>
      <MyText color={COLORS.grey} style={{lineHeight: FONT_SIZE['1.5xl']}}>
        Uniquely incubate alternative relationships and holistic manufactured
        products. Competently iterate distributed technologies via multimedia
        based markets. Progressively incubate granular bandwidth with
        bleeding-edge sources.
      </MyText>
    </View>
  );
};

const SectionThree = () => {
  return (
    <View style={{marginVertical: 20}}>
      <MyText bold={FONT_WEIGHT.semibold}>Rate your Expericence</MyText>
      <View style={{padding: 10, gap: 10, flexDirection: 'row'}}>
        <AntDesign name="star" size={20} />
        <AntDesign name="star" size={20} />
        <AntDesign name="star" size={20} />
        <AntDesign name="star" size={20} />
        <AntDesign name="star" size={20} />
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: 'lightgrey',
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 20,
          paddingHorizontal: 20,
          paddingBottom: 20,
          paddingTop: 20,
        }}>
        <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.semibold}>
          Feedback
        </MyText>
        <TextInput
          placeholder="Type..."
          style={{
            height: 150,
            marginTop: 10,
            padding: 10,
            backgroundColor: COLORS.white,
            borderRadius: 10,
            textAlignVertical: 'top',
          }}
        />
      </View>
    </View>
  );
};
const CompletedJobDetailScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout
      headerComp={
        <MainHeader title="Detail" onBackPress={navigation.goBack} />
      }>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </MainLayout>
  );
};

export default CompletedJobDetailScreen;
