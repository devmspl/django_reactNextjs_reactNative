import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import InputWrapper from '../../components/inputs/InputWrapper';
import PasswordInput from '../../components/inputs/PasswordInput';

const ResetPassword = () => {
  const navigation = useNavigation();
  const handleVerify = () => {
    // @ts-ignore
    navigation.navigate('LoginRegister');
  };
  return (
    <MainLayout
      headerComp={<MainHeader onBackPress={navigation.goBack} title="OTP" />}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <InputWrapper title="New Password">
            <PasswordInput placeholder="*********" />
          </InputWrapper>
          <InputWrapper title="Confirm Password">
            <PasswordInput placeholder="*********" />
          </InputWrapper>
        </View>
        <View style={styles.nextBtnBox}>
          <PrimaryBtn onPress={handleVerify} text="Done" />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  innerContainer: {marginTop: 30, gap: 20, padding: 10},
  nextBtnBox: {marginTop: 30},
});
