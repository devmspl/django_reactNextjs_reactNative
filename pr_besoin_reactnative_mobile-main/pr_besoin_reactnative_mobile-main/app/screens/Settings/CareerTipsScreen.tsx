/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE} from '../../styles';
import Tip0Png from '../../../assets/images/tip0.png';
import Tip1Png from '../../../assets/images/tip1.png';

const data = [
  {
    title: '21 Interview Skills You Need To Crack An interview',
    des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    date: 'Nov 15, 2023',
    team: 'Besoin Content Team',
    img: Tip0Png,
  },
  {
    title: 'Writing A Resignation Letter: Format and 10+ Samples',
    des: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    date: 'Nov 15, 2023',
    team: 'Besoin Content Team',
    img: Tip1Png,
  },
];
const CareerScreen = () => {
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Settings" />
      <MyText color={COLORS.grey}>
        Here are some articles curated specially for you on the Besoin Blog
      </MyText>
      <FlatList
        data={data}
        contentContainerStyle={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View
              style={{
                overflow: 'hidden',
                borderRadius: 15,
                marginTop: 20,
                backgroundColor: COLORS.lightgrey,
              }}>
              <Image
                style={{height: 100, width: '100%', resizeMode: 'cover'}}
                source={item.img}
              />
              <View
                style={{
                  padding: 10,
                  gap: 5,
                }}>
                <MyText size={FONT_SIZE.lg} color={COLORS.black}>
                  {item.title}
                </MyText>
                <MyText size={FONT_SIZE.base} color={COLORS.grey}>
                  {item.des}
                </MyText>
              </View>
              <View
                style={{
                  padding: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  {item.team}
                </MyText>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  {item.date}
                </MyText>
              </View>
            </View>
          );
        }}
      />
    </MainLayout>
  );
};

export default CareerScreen;
