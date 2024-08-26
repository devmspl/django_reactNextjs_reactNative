/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import GiftSvg from '../../../assets/svg/gift.svg';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE} from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
  {
    name: 'Tongkun Lee',
    platform: 'Facebook',
    isAccepted: false,
  },
  {
    name: 'Rehmem Khihal',
    platform: 'Fickr',
    isAccepted: false,
  },
  {
    name: 'Fazur Nalim',
    platform: 'Unsplash',
    isAccepted: true,
  },
  {
    name: 'Boa Palegleam',
    platform: 'Google',
    isAccepted: true,
  },
  {
    name: 'Gurkir Glorymore',
    platform: 'LinkedIn',
    isAccepted: false,
  },
  {
    name: 'Tongkun Lee',
    platform: 'Facebook',
    isAccepted: false,
  },
];
const ReferAndEarnScreen = () => {
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Refer and Earn" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <GiftSvg />
          <MyText size={FONT_SIZE['2xl']}>Refer and Earn</MyText>
        </View>
        <View
          style={{
            borderRadius: 15,
            borderColor: COLORS.lightGreen,
            borderWidth: 2,
            height: 60,
            marginVertical: 20,
            flexDirection: 'row',
            overflow: 'hidden',
          }}>
          <View
            style={{
              flex: 1,
              paddingLeft: 15,
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
            }}>
            <AntDesign
              name="link"
              color={COLORS.lightGreen}
              size={FONT_SIZE.xl}
            />
            <MyText color={COLORS.lightGreen}>BES2020</MyText>
          </View>
          <View
            style={{
              backgroundColor: COLORS.lightGreen,
              width: '40%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MyText color={COLORS.white}>Refer & Earn</MyText>
          </View>
        </View>

        <View>
          <MyText size={FONT_SIZE.xl}>Invite a friend</MyText>
          <View style={{marginVertical: 10}}>
            {data.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    marginVertical: 10,
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <Ionicons
                    name="person-circle-sharp"
                    color={COLORS.black}
                    size={60}
                  />
                  <View style={{flex: 1}}>
                    <MyText style={{fontSize: FONT_SIZE.l}}>{item.name}</MyText>
                    <MyText size={FONT_SIZE.base} style={{opacity: 0.5}}>
                      {item.platform}
                    </MyText>
                  </View>
                  {item.isAccepted ? (
                    <View
                      style={{
                        padding: 10,
                        paddingHorizontal: 20,
                        backgroundColor: 'rgba(79, 170, 137, 0.1)',
                        borderRadius: 10,
                      }}>
                      <MyText color={COLORS.lightGreen}>Accepted</MyText>
                    </View>
                  ) : (
                    <View
                      style={{
                        padding: 10,
                        paddingHorizontal: 20,
                        backgroundColor: 'lightgrey',
                        borderRadius: 10,
                      }}>
                      <MyText>Invite</MyText>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default ReferAndEarnScreen;
