import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {COLORS, wp} from '../../styles';
import AppLogoWhite from './../../../assets/svg/LogoWhite.png';

const SplashScreen = ({onEnd}: {onEnd: () => void}) => {
  useEffect(() => {
    setTimeout(onEnd, 800);
  }, [onEnd]);

  return (
    <View style={styles.container}>
      <Image
        source={AppLogoWhite}
        style={{width: wp(60)}}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
