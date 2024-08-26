/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {MyText} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';
import SecondaryBtn from '../../components/SecondarBtn';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import LogoutSvg from '../../../assets/illustration/logout.svg';
import {FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';

const LogoutScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout headerComp={<MainHeader title="Logout" />}>
      <View style={{alignItems: 'center', marginTop: 80}}>
        <LogoutSvg />
      </View>
      <View style={{gap: 10}}>
        <MyText size={FONT_SIZE['1.5xl']} bold={FONT_WEIGHT.semibold} center>
          Logout?
        </MyText>
        <MyText center>Are you sure want to logout</MyText>
      </View>
      <View style={{gap: 10, marginTop: 20}}>
        <PrimaryBtn
          onPress={() => navigation.navigate('LoginRegister')}
          text="Logout"
        />
        <SecondaryBtn text="Cancel" />
      </View>
    </MainLayout>
  );
};

export default LogoutScreen;
