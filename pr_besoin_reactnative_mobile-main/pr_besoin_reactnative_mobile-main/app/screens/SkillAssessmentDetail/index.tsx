/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {ScrollView, View} from 'react-native';
import {MyText} from '../../components/MyText';
import MainHeader from '../../components/layout/MainHeader';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';

const SkillAssessmentDetailScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <MainHeader title="" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{padding: 20}}>
          <View style={{width: 60, height: 60, backgroundColor: COLORS.grey}} />
          <View style={{marginVertical: 10}}>
            <MyText bold={FONT_WEIGHT.semibold}>Adbobe Photoshop</MyText>
          </View>
          <MyText color={COLORS.grey}>
            Topics: Interoperability, Non-destructive Editing Output, Photoshop
            Fundamentals, Productivity
          </MyText>
          <View style={{marginVertical: 10}}>
            <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
              3.5 M people took this
            </MyText>
          </View>
          <View>
            <MyText size={FONT_SIZE.base} color={COLORS.grey}>
              15 multiple choice questions
            </MyText>
            <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
              1.5 minute per question
            </MyText>
            <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
              Score in the top 30% to earn a badge
            </MyText>
          </View>
        </View>
        <View style={{height: 5, backgroundColor: COLORS.grey, opacity: 0.4}} />

        <View style={{padding: 20}}>
          <MyText style={{fontWeight: FONT_WEIGHT.semibold}}>
            Before you start
          </MyText>
        </View>
        <View style={{padding: 20, gap: 10}}>
          <View>
            <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence
            </MyText>
          </View>
          <View>
            <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence
            </MyText>
          </View>
          <View>
            <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence
            </MyText>
          </View>
        </View>
      </ScrollView>

      <View style={{padding: 20}}>
        <PrimaryBtn
          text="Start"
          onPress={() => {
            // @ts-ignore
            navigation.navigate('SkillAssementStart');
          }}
          containerStyle={{
            width: 150,
            alignSelf: 'flex-end',
          }}
        />
      </View>
    </View>
  );
};

export default SkillAssessmentDetailScreen;
