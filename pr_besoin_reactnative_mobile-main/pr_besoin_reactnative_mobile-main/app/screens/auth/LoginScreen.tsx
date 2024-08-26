import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MyTextInput from '../../components/inputs/MyTextInput';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import PasswordInput from '../../components/inputs/PasswordInput';
import Line from '../../components/Line';
import {MyText} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';
import CheckBox from '../../components/inputs/CheckBox';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const LoginScreen = () => {
  const {APP_MODE} = useSelector((s: RootState) => s.app);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <MyTextInput placeholder="email" />
      <PasswordInput placeholder="password" />
      <View style={styles.orBox}>
        <Line color={'grey'} />
        <MyText>OR</MyText>
        <Line color={'grey'} />
      </View>
      <TouchableOpacity
        style={styles.phoneLoginBox}
        // @ts-ignore
        onPress={() => navigation.navigate('ForgetPasswordPhone')}>
        <MyText center size={FONT_SIZE.xs}>
          Login with Phone number
        </MyText>
      </TouchableOpacity>
      <View style={styles.section2}>
        <View style={styles.section2RememberMe}>
          <CheckBox />
          <MyText bold={FONT_WEIGHT.semibold}>Remember Me</MyText>
        </View>
        <TouchableOpacity
          // @ts-ignore
          onPress={() => navigation.navigate('ForgetPasswordPhone')}>
          <MyText bold={FONT_WEIGHT.semibold} color={COLORS.lightGreen}>
            Forget Password?
          </MyText>
        </TouchableOpacity>
      </View>

      <PrimaryBtn
        onPress={() => {
          if (APP_MODE === 'Company') {
            navigation.navigate('PersonalInfoCompany');
          } else {
            navigation.navigate('PersonalInfo');
          }
        }}
        text="Log In"
      />
      <View style={styles.section3}>
        <MyText bold={FONT_WEIGHT.semibold} center>
          Don't have an account?
          <MyText bold={FONT_WEIGHT.normal} color={COLORS.lightGreen}>
            {' Register'}
          </MyText>
        </MyText>
      </View>

      <View style={[styles.orBox]}>
        <Line color={'lightgrey'} />
        <MyText color={COLORS.grey}>Or continue with</MyText>
        <Line color={'lightgrey'} />
      </View>

      <View style={styles.socialSection}>
        <View style={styles.socialBox}>
          <Image
            source={require('../../../assets/images/fb.png')}
            style={styles.socialImg}
          />
        </View>
        <View style={styles.socialBox}>
          <Image
            source={require('../../../assets/images/google.png')}
            style={styles.socialImg}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
  },
  orBox: {flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 20},
  phoneLoginBox: {
    marginVertical: 20,
    borderRadius: 10,
    borderColor: COLORS.lightGreen,
    padding: 10,
    borderWidth: 1,
    width: '80%',
    alignSelf: 'center',
  },
  section2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  section3: {marginVertical: 20},
  socialSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
    margin: 20,
    alignItems: 'center',
  },
  socialBox: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 20,
    borderRadius: 20,
  },
  socialImg: {
    width: 20,
    height: 20,
  },
  section2RememberMe: {flexDirection: 'row', alignItems: 'center', gap: 5},
});
