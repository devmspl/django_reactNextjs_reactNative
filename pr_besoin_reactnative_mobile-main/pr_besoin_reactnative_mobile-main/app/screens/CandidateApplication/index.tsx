/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {Image, Pressable, ScrollView, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import Line from '../../components/Line';
import PdfImg from '../../../assets/images/pdf.png';
import Image1 from '../../../assets/images/avatar.png';
const CandidateApplicationScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const renderBtns = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          marginVertical: 10,
        }}>
        <Pressable
          style={{
            backgroundColor: COLORS.red,
            flex: 1,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            gap: 5,
          }}>
          <Entypo name="cross" color={COLORS.white} size={20} />
          <MyText color={COLORS.white}>Rejected</MyText>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('ScheduleInterview')}
          style={{
            backgroundColor: COLORS.lightGreen,
            flex: 1,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            gap: 5,
          }}>
          <AntDesign name="checkcircle" color={COLORS.white} size={20} />
          <MyText color={COLORS.white}>Schedule Interview</MyText>
        </Pressable>
      </View>
    );
  };
  return (
    <MainLayout>
      <MainHeader title="Candidate Application" leftArrowStyle={{left: 0}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            paddingBottom: 10,
            marginTop: 10,
          }}>
          <View
            style={{
              backgroundColor: COLORS.lightgrey,
              width: 50,
              height: 50,
              borderRadius: 50,
            }}>
            <Image
              source={Image1}
              style={{
                backgroundColor: COLORS.lightgrey,
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            />
          </View>
          <View style={{gap: 5}}>
            <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.lg}>
              Jessica Jung
            </MyText>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="user" color={COLORS.black} size={15} />
              <MyText size={FONT_SIZE.sm}>Graphic Designer</MyText>
            </View>
          </View>
        </View>
        <Line color="lightgrey" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingBottom: 15,
          }}>
          <MyText>Email</MyText>
          <MyText>Jessicajung@gmail.com</MyText>
        </View>
        <Line color="lightgrey" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingBottom: 15,
          }}>
          <MyText>Current Salary</MyText>
          <MyText>20,000</MyText>
        </View>
        <Line color="lightgrey" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingBottom: 15,
          }}>
          <MyText>Expected Salary</MyText>
          <MyText>N/A</MyText>
        </View>
        <Line color="lightgrey" />

        <View style={{marginTop: 15, gap: 10}}>
          <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE.lg}>
            Remarks
          </MyText>
          <View>
            <MyText color={COLORS.grey}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintockrginia
            </MyText>
          </View>
        </View>
        <View style={{marginTop: 15, gap: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <AntDesign name="questioncircleo" size={15} />
            <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE.lg}>
              Screening Questioning
            </MyText>
          </View>

          <View style={{marginBottom: 5, marginTop: 10}}>
            <MyText bold={FONT_WEIGHT.bold}> 1. Have any experience</MyText>
            <MyText color={COLORS.grey}> No answer provided yet</MyText>
          </View>
          <View style={{marginBottom: 5}}>
            <MyText bold={FONT_WEIGHT.bold}>
              2. Must have experience with Java Script?
            </MyText>
            <MyText color={COLORS.grey}> Yes</MyText>
          </View>
          <View style={{marginBottom: 5}}>
            <MyText bold={FONT_WEIGHT.bold}>
              3. Must have experience with Java Script?
            </MyText>
            <MyText color={COLORS.grey}> Yes</MyText>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 40,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'lightgrey',
            padding: 10,
            alignItems: 'center',
            gap: 10,
          }}>
          <Image source={PdfImg} style={{width: 40, height: 40}} />
          <View style={{flex: 1}}>
            <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE.lg}>
              Jessica1.pdf
            </MyText>
            <MyText>702kb</MyText>
          </View>
          <AntDesign name="download" size={20} color={COLORS.lightGreen} />
        </View>
      </ScrollView>
      {renderBtns()}
    </MainLayout>
  );
};

export default CandidateApplicationScreen;
