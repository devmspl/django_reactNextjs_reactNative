/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import Entypo from 'react-native-vector-icons/Entypo';

const data = [
  {
    title: 'Application Submitted',
    date: '15/11/2023     8:00PM',
  },
  {
    title: 'Reviewed by team',
    date: '15/11/2023     8:00PM',
  },
  {
    title: 'Round 1 Review',
    date: '15/11/2023     8:00PM',
  },
  {
    title: 'Round 2 Review',
    date: '15/11/2023     8:00PM',
  },
  {
    title: 'Round 3 Review',
    date: '15/11/2023     8:00PM',
  },
  {
    title: 'Final HR Interview',
    date: '15/11/2023     8:00PM',
  },
  {
    title: 'Offer Letter',
  },
];

const AppliedJobDetailScreen = () => {
  return (
    <MainLayout headerComp={<MainHeader title="Applied Job Details" />}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            borderBottomColor: COLORS.lightgrey,
            borderBottomWidth: 2,
            padding: 10,
            paddingLeft: 30,
          }}>
          <MyText bold={FONT_WEIGHT.semibold}>Product Designer</MyText>
          <MyText color={COLORS.grey}>Limited Sounds, 349 Irvine,CA</MyText>
        </View>

        <View style={{padding: 10}}>
          <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE.lg}>
            Track Application
          </MyText>
        </View>

        <View>
          {data.map((item, idx) => {
            const isActive = idx <= 3;
            const isLast = idx === data.length - 1;
            return (
              <View
                key={idx}
                style={{
                  paddingLeft: 20,
                  borderLeftWidth: isLast ? 0 : 2,
                  paddingBottom: 20,
                  marginLeft: 10,
                }}>
                <View
                  style={{
                    backgroundColor: isActive ? COLORS.lightGreen : COLORS.grey,
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    position: 'absolute',
                    zIndex: 1,
                    left: -10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {isActive ? (
                    <Entypo name="check" color={COLORS.white} />
                  ) : null}
                </View>
                <MyText bold={FONT_WEIGHT.semibold}>{item.title}</MyText>
                {!isLast && <MyText color={COLORS.grey}>{item.date}</MyText>}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default AppliedJobDetailScreen;
