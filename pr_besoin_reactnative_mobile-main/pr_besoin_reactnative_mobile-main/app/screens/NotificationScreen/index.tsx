/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE} from '../../styles';
import Noti1Svg from '../../../assets/svg/Noti1.svg';
import Noti2Svg from '../../../assets/svg/Noti2.svg';
import Noti3Svg from '../../../assets/svg/Noti3.svg';
const NotificationScreen = () => {
  return (
    <MainLayout headerComp={<MainHeader title="Notification" />}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <MyText>Today</MyText>
        <View
          style={{
            padding: 5,
            backgroundColor: COLORS.lightgrey,
            borderRadius: 10,
            marginTop: 15,
          }}>
          <View
            style={{
              padding: 20,
              borderRadius: 10,
              gap: 10,
              flexDirection: 'row',
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
            }}>
            <Noti3Svg />
            <View style={{flex: 1, gap: 10}}>
              <MyText>
                You might have missed: 6 jobs similar to your recent applies
              </MyText>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
                  Job based on your applies
                </MyText>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  5h ago
                </MyText>
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              borderRadius: 10,
              gap: 10,
              flexDirection: 'row',
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
            }}>
            <Noti1Svg />
            <View style={{flex: 1, gap: 10}}>
              <MyText>
                You might have missed: 6 jobs similar to your recent applies
              </MyText>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
                  Job based on your applies
                </MyText>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  5h ago
                </MyText>
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              borderRadius: 10,
              gap: 10,
              flexDirection: 'row',
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
            }}>
            <Noti2Svg />
            <View style={{flex: 1, gap: 10}}>
              <MyText>
                You might have missed: 6 jobs similar to your recent applies
              </MyText>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
                  Job based on your applies
                </MyText>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  5h ago
                </MyText>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            padding: 5,
            borderRadius: 10,
            marginTop: 15,
          }}>
          <MyText>Yesterday</MyText>
          <View
            style={{
              padding: 20,
              borderRadius: 10,
              gap: 10,
              flexDirection: 'row',
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
            }}>
            <Noti3Svg />
            <View style={{flex: 1, gap: 10}}>
              <MyText>
                You might have missed: 6 jobs similar to your recent applies
              </MyText>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
                  Job based on your applies
                </MyText>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  5h ago
                </MyText>
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              borderRadius: 10,
              gap: 10,
              flexDirection: 'row',
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
            }}>
            <Noti1Svg />
            <View style={{flex: 1, gap: 10}}>
              <MyText>
                You might have missed: 6 jobs similar to your recent applies
              </MyText>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
                  Job based on your applies
                </MyText>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  5h ago
                </MyText>
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              borderRadius: 10,
              gap: 10,
              flexDirection: 'row',
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
            }}>
            <Noti2Svg />
            <View style={{flex: 1, gap: 10}}>
              <MyText>
                You might have missed: 6 jobs similar to your recent applies
              </MyText>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
                  Job based on your applies
                </MyText>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  5h ago
                </MyText>
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              borderRadius: 10,
              gap: 10,
              flexDirection: 'row',
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
            }}>
            <Noti2Svg />
            <View style={{flex: 1, gap: 10}}>
              <MyText>
                You might have missed: 6 jobs similar to your recent applies
              </MyText>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
                  Job based on your applies
                </MyText>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  5h ago
                </MyText>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default NotificationScreen;

StyleSheet.create({});
