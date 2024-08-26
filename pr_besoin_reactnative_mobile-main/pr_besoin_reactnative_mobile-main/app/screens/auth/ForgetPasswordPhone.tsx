import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE} from '../../styles';
import PhoneInput from '../../components/inputs/PhoneInput';
import {useNavigation} from '@react-navigation/native';

const ForgetPasswordPhone = () => {
  const navigation = useNavigation();
  return (
    <MainLayout
      headerComp={
        <MainHeader onBackPress={navigation.goBack} title="Phone number" />
      }>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <MyText center color={COLORS.grey} size={FONT_SIZE.lg}>
            Enter your Phone Number
          </MyText>
          <PhoneInput placeholder="1234567890" />
        </View>
      </ScrollView>
      <View style={styles.nextBtnBox}>
        <PrimaryBtn
          // @ts-ignore
          onPress={() => navigation.navigate('ForgetPasswordPhoneOtpVerify')}
          text="Next"
        />
      </View>
    </MainLayout>
  );
};

export default ForgetPasswordPhone;

const styles = StyleSheet.create({
  innerContainer: {marginTop: 30, gap: 20, padding: 10},
  nextBtnBox: {marginBottom: 20},
});
