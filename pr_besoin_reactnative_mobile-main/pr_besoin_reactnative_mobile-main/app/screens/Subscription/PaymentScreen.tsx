/* eslint-disable react-native/no-inline-styles */
import {ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {View} from 'react-native';
import AddButton from '../../components/AddButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import VisaSvg from '../../../assets/icons/visa.svg';
import MasterSvg from '../../../assets/icons/Mastercard.svg';
import PrimaryBtn from '../../components/PrimaryBtn';
const PaymentScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <React.Fragment>
      <View
        style={{
          backgroundColor: COLORS.lightGreen,
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}>
        <MainHeader
          leftArrowWhite
          titleColor={COLORS.white}
          title="Order Summaray"
        />
        <View style={{padding: 20}}>
          <MyText color={COLORS.white} size={FONT_SIZE.l}>
            Primum Subscription (Popluar)
          </MyText>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <MyText
              size={FONT_SIZE['1.5xl']}
              bold={FONT_WEIGHT.bold}
              color={COLORS.white}>
              $40/m
            </MyText>
            <MyText color={COLORS.white}>Change</MyText>
          </View>
        </View>
      </View>
      <MainLayout bgColor={'rgba(255,255,255,0.1)'}>
        <ScrollView
          contentContainerStyle={{marginTop: 30, paddingBottom: 60}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.xl}>
            Pay with
          </MyText>

          <View style={{marginTop: 20, gap: 20}}>
            <View
              style={{
                backgroundColor: COLORS.white,
                borderRadius: 10,
                width: '100%',
                padding: 10,
                paddingVertical: 20,
                gap: 10,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <MasterSvg />
                <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.base}>
                  Card
                </MyText>
              </View>
              <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.base}>
                **** **** 5689
              </MyText>
            </View>

            <View
              style={{
                backgroundColor: COLORS.white,
                borderRadius: 10,
                width: '100%',
                padding: 10,
                paddingVertical: 20,
                gap: 10,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <VisaSvg />
                <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.base}>
                  Card
                </MyText>
              </View>
              <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.base}>
                **** **** 5689
              </MyText>
            </View>
          </View>

          <View style={{marginTop: 30, gap: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddNewCard')}
              style={{
                backgroundColor: COLORS.white,
                borderRadius: 10,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                padding: 10,
                paddingVertical: 20,
              }}>
              <AddButton onPress={() => navigation.navigate('AddNewCard')} />
              <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.base}>
                Add New Card
              </MyText>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <View
                style={{
                  flex: 1,
                  height: 2,
                  backgroundColor: 'lightgrey',
                }}
              />
              <MyText color={COLORS.black} size={FONT_SIZE.l}>
                OR
              </MyText>
              <View
                style={{
                  flex: 1,
                  height: 2,
                  backgroundColor: 'lightgrey',
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BankDetail')}
              style={{
                backgroundColor: COLORS.white,
                borderRadius: 10,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                padding: 10,
                paddingVertical: 20,
              }}>
              <AddButton
                icon={<FontAwesome name="bank" color={COLORS.lightGreen} />}
                onPress={() => navigation.navigate('BankDetail')}
              />
              <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.base}>
                PAY WITH BANK
              </MyText>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <PrimaryBtn
          onPress={() => navigation.navigate('PaymentPinEnter')}
          text="Continue"
          containerStyle={{marginBottom: 20}}
        />
      </MainLayout>
    </React.Fragment>
  );
};

export default PaymentScreen;
