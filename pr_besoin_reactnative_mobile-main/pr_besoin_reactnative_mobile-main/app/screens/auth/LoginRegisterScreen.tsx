import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MainHeader from '../../components/layout/MainHeader';
import {COLORS, FONT_WEIGHT} from '../../styles';

const Tab = createMaterialTopTabNavigator();

function LoginRegisterTopTabs() {
  return (
    <View style={styles.tabWrapper}>
      <Tab.Navigator
        screenOptions={{
          tabBarAndroidRipple: {borderless: false},
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.lightGreen,
          },
          tabBarActiveTintColor: COLORS.lightGreen,
          tabBarInactiveTintColor: COLORS.grey,
        }}>
        <Tab.Screen
          options={{
            tabBarStyle: {
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              elevation: 0,
            },
            tabBarLabel: 'Log In',
            tabBarLabelStyle: {
              textTransform: 'none',
              fontWeight: FONT_WEIGHT.semibold,
            },
          }}
          name="LoginView"
          component={LoginScreen}
        />
        <Tab.Screen
          options={{
            tabBarStyle: {
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              elevation: 0,
            },
            tabBarLabel: 'Register',
            tabBarLabelStyle: {
              textTransform: 'none',
              fontWeight: FONT_WEIGHT.semibold,
            },
          }}
          name="RegisterView"
          component={RegisterScreen}
        />
      </Tab.Navigator>
    </View>
  );
}

const LoginRegisterScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Login" />
      <LoginRegisterTopTabs />
    </View>
  );
};

export default LoginRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  tabWrapper: {flex: 1, marginHorizontal: '10%'},
});
