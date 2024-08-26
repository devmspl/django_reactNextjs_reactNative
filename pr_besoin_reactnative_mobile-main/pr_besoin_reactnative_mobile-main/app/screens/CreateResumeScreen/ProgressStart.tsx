/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import PrimaryBtn from '../../components/PrimaryBtn';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import {MyText} from '../../components/MyText';
import Line from '../../components/Line';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

type RenderBtnsProps = {
  onNextPress?: () => void;
  onBackPress?: () => void;
  onSavePress?: () => void | null;
};

export const RenderBtns = ({
  onBackPress,
  onNextPress,
  onSavePress,
}: RenderBtnsProps) => {
  return (
    <View>
      {onSavePress ? (
        <TouchableOpacity
          onPress={onSavePress}
          style={{
            width: 70,
            height: 25,
            backgroundColor: COLORS.black,
            marginHorizontal: 'auto',
            marginVertical: 20,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MyText color={COLORS.lightGreen}>SAVE</MyText>
        </TouchableOpacity>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}>
        <PrimaryBtn
          onPress={onBackPress}
          containerStyle={{width: '40%'}}
          text="Back"
        />
        <PrimaryBtn
          onPress={onNextPress}
          containerStyle={{backgroundColor: COLORS.lightGreen, width: '40%'}}
          text="Next"
        />
      </View>
    </View>
  );
};

const data = [
  {
    title: 'Personal Details',
    navigateTo: 'ProgressPersonalDetailScreen',
  },
  {
    title: 'Experience',
    navigateTo: 'ProgressPersonalDetails',
  },
  {
    title: 'Academic Qualification',
    navigateTo: 'ProgressPersonalDetails',
  },
  {
    title: 'Location',
    navigateTo: 'ProgressPersonalDetails',
  },
  {
    title: 'Skills ',
    navigateTo: 'ProgressPersonalDetails',
  },
  {
    title: 'Language',
    navigateTo: 'ProgressPersonalDetails',
  },
  {
    title: 'Certificates',
    navigateTo: 'ProgressPersonalDetails',
  },
  {
    title: 'Awards',
    navigateTo: 'ProgressPersonalDetails',
  },
  {
    title: 'Links',
    navigateTo: 'ProgressPersonalDetails',
  },
  {
    title: 'Interests',
    navigateTo: 'ProgressPersonalDetails',
  },
];

const ProgressStart = () => {
  const naviagtion =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Create CV" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', gap: 10, marginVertical: 15}}>
          <View
            style={{
              backgroundColor: COLORS.lightgrey,
              width: 75,
              height: 75,
              borderRadius: 10,
            }}
          />
          <View style={{gap: 4}}>
            <MyText size={FONT_SIZE.lg} bold={FONT_WEIGHT.semibold}>
              Jessica Jung
            </MyText>
            <MyText>Senior Designer</MyText>
          </View>
        </View>
        <MyText size={FONT_SIZE.lg} bold={FONT_WEIGHT.semibold}>
          Add Your information
        </MyText>
        <Line color={COLORS.grey} containerStyle={{marginVertical: 5}} />

        <View style={{marginTop: 15}}>
          {data.map(item => {
            const isCompleted = false;
            return (
              <TouchableOpacity
                style={{flexDirection: 'row', padding: 10}}
                key={item.title}
                //@ts-ignore
                onPress={() => naviagtion.navigate(item.navigateTo)}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <Feather size={15} color={COLORS.black} name="edit" />
                  <MyText size={FONT_SIZE.l}>{item.title}</MyText>
                </View>
                {isCompleted && (
                  <Entypo size={15} color={COLORS.lightGreen} name="check" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <RenderBtns
        onBackPress={naviagtion.goBack}
        onNextPress={() => naviagtion.navigate('ProgressPersonalDetailScreen')}
      />
    </MainLayout>
  );
};

export default ProgressStart;
