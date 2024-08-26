/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {COLORS, FONT_SIZE} from '../../styles';
import {MyText} from '../../components/MyText';
import Entypo from 'react-native-vector-icons/Entypo';
const BookmarkScreen = () => {
  return (
    <MainLayout headerComp={<MainHeader title="Bookmarks" />}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4].map(i => {
          return (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: COLORS.lightgrey,
                }}
              />
              <View style={{flex: 1}}>
                <MyText>Graphic Desginer</MyText>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  Super Scholar
                </MyText>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  349 lrvine,CA
                </MyText>
                <MyText
                  style={{marginTop: 10}}
                  size={FONT_SIZE.sm}
                  color={COLORS.grey}>
                  Posted 6mo ago
                </MyText>
              </View>
              <View>
                <Entypo
                  name="dots-three-horizontal"
                  color={COLORS.black}
                  size={20}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </MainLayout>
  );
};

export default BookmarkScreen;
