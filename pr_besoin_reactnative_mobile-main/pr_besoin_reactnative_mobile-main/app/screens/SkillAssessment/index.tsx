/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import SkillSvg from '../../../assets/svg/skill-board.svg';
import {useNavigation} from '@react-navigation/native';

const SkillAssessment = () => {
  const navigation = useNavigation();
  return (
    <View>
      <MainHeader title="" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 50}}>
        <View style={{padding: 20}}>
          <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.lg}>
            Skill Assessment
          </MyText>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row', gap: 20, marginTop: 20}}>
              <View style={{gap: 10}}>
                <MyText center color={COLORS.lightGreen} size={FONT_SIZE.lg}>
                  0
                </MyText>
                <MyText>Badge</MyText>
              </View>
              <View style={{gap: 10}}>
                <MyText center color={COLORS.lightGreen} size={FONT_SIZE.lg}>
                  2
                </MyText>
                <MyText>To Retake</MyText>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                }}>
                <SkillSvg />
              </View>
            </View>
          </View>
        </View>
        <View style={{height: 5, backgroundColor: COLORS.grey, opacity: 0.3}} />

        <View style={{padding: 20}}>
          <MyText size={FONT_SIZE.lg} bold={FONT_WEIGHT.semibold}>
            Recommended for you
          </MyText>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(i => {
            return (
              <TouchableOpacity
                onPress={() => {
                  // @ts-ignore
                  navigation.navigate('SkillAssessmentDetail');
                }}
                key={i}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  marginVertical: 20,
                }}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'lightgrey',
                  }}
                />
                <View>
                  <MyText bold={FONT_WEIGHT.semibold}>Adobe Photoshop</MyText>
                  <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                    Topics: Interoperability, Non-destructive Editing
                  </MyText>
                  <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                    3.5 M people took this
                  </MyText>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SkillAssessment;
