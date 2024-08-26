import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import Line from '../../components/Line';
import {MyText} from '../../components/MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import CompanyImg from '../../../assets/images/companyImage.png';

const CompanyEditProfileScreen = () => {
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Profile" />
      <ScrollView>
        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: COLORS.lightGreen,
            }}>
            <Image
              source={CompanyImg}
              style={{width: '100%', height: '100%'}}
            />
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: COLORS.lightGreen,
                borderRadius: 15,
                position: 'absolute',
                bottom: -5,
                right: -5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo name="edit" color={COLORS.white} size={10} />
            </View>
          </View>
          <View>
            <MyText
              color={COLORS.black}
              size={FONT_SIZE.lg}
              bold={FONT_WEIGHT.bold}>
              Pixylo
            </MyText>
            <MyText color={COLORS.grey}>Software Development Company</MyText>
          </View>
        </View>

        <View style={{marginBottom: 20}}>
          <MyText
            color={COLORS.black}
            size={FONT_SIZE.lg}
            bold={FONT_WEIGHT.semibold}>
            About
          </MyText>
          <MyText color={COLORS.grey}>
            I know i can help your company create stunning visuals. As someone
            who has worked inb marketing and graphic design for over a decade, I
            know what brands need to capture their audience’ attention. With my
            pow...
            <MyText color={COLORS.lightGreen}>Read more</MyText>
          </MyText>
        </View>
        <Line color="lightgray" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View style={{flex: 1}}>
            <MyText
              color={COLORS.black}
              size={FONT_SIZE.lg}
              bold={FONT_WEIGHT.semibold}>
              Email
            </MyText>
            <MyText>Jessicajung@gmail.com</MyText>
          </View>
          <Entypo name="edit" color={COLORS.lightGreen} size={15} />
        </View>
        <Line color="lightgray" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View style={{flex: 1}}>
            <MyText
              color={COLORS.black}
              size={FONT_SIZE.lg}
              bold={FONT_WEIGHT.semibold}>
              Location
            </MyText>
            <MyText>111 California, USA</MyText>
          </View>
          <Entypo name="edit" color={COLORS.lightGreen} size={15} />
        </View>
        <Line color="lightgray" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View style={{flex: 1}}>
            <MyText
              color={COLORS.black}
              size={FONT_SIZE.lg}
              bold={FONT_WEIGHT.semibold}>
              Establish Date
            </MyText>
            <MyText>2015 - 2023</MyText>
          </View>
          <Entypo name="edit" color={COLORS.lightGreen} size={15} />
        </View>
        <Line color="lightgray" />
      </ScrollView>
      <View style={{padding: 10}}>
        <PrimaryBtn text="Update" />
      </View>
    </MainLayout>
  );
};

export default CompanyEditProfileScreen;

const styles = StyleSheet.create({});
