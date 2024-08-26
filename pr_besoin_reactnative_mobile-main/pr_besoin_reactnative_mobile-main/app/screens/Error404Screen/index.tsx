import {StyleSheet, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import Error404Svg from '../../../assets/illustration/error.svg';
const Error404Screen = () => {
  return (
    <MainLayout>
      <View style={styles.imageContainer}>
        <Error404Svg />
      </View>
      <View style={styles.textConatiner}>
        <MyText
          color={COLORS.black}
          size={FONT_SIZE['2xl']}
          center
          bold={FONT_WEIGHT.semibold}>
          404 Error
        </MyText>
        <MyText center style={styles.description}>
          Sorry, the keyword you entered cannot be found, please check again or
          search with another keyword.
        </MyText>
      </View>
      <PrimaryBtn text="Try Again" />
      <PrimaryBtn
        containerStyle={styles.secondBtn}
        textStyle={{color: COLORS.black}}
        text="Back to Home"
      />
    </MainLayout>
  );
};

export default Error404Screen;

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
  secondBtn: {marginTop: 20, backgroundColor: COLORS.lightgrey},
});
