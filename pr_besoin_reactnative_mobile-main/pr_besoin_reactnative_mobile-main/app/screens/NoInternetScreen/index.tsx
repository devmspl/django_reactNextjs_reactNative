import {StyleSheet, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import NoInternetSvg from '../../../assets/illustration/internet.svg';
const NoInternetScreen = () => {
  return (
    <MainLayout>
      <View style={styles.imageContainer}>
        <NoInternetSvg />
      </View>
      <View style={styles.textConatiner}>
        <MyText
          color={COLORS.black}
          size={FONT_SIZE['2xl']}
          center
          bold={FONT_WEIGHT.semibold}>
          No Internet
        </MyText>
        <MyText center style={styles.description}>
          Seems like you are not connected to the internet. Check your
          connection and try again.
        </MyText>
      </View>
      <PrimaryBtn text="Try Again" />
    </MainLayout>
  );
};

export default NoInternetScreen;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(15),
  },
  textConatiner: {
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.grey,
  },
});
