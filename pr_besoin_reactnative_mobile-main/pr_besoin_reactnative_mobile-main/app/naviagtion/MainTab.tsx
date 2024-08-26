import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HomeActiveIcon from '../../assets/icons/tab/HomeActive.svg';
import ApplicationIcon from '../../assets/icons/tab/Application.svg';
import JobsIcon from '../../assets/icons/tab/Job.svg';
import MessageIcon from '../../assets/icons/tab/Message.svg';
import {Image, StyleSheet, View} from 'react-native';
import {MyText} from '../components/MyText';
import {COLORS, FONT_SIZE} from '../styles';
import ProfileScreen from '../screens/ProfileScreen';
import ApplicationScreen from '../screens/ApplicationScreen';
import MessagesScreen from '../screens/MessagesScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import CompanyHomeScreen from '../screens/CompanyHomeScreen';
import JobScreen from '../screens/JobScreen';

type TabIconType = {
  focused: any;
};
const homeTabIcon = ({focused}: TabIconType) => {
  return (
    <View style={styles.tabBarIconStyle}>
      <HomeActiveIcon width={20} height={20} />
      <MyText
        color={focused ? COLORS.lightGreen : COLORS.grey}
        size={FONT_SIZE.sm}>
        Home
      </MyText>
      {focused && <View style={styles.bottomBall} />}
    </View>
  );
};
const applicationTabIcon = ({focused}: TabIconType) => {
  return (
    <View style={styles.tabBarIconStyle}>
      <ApplicationIcon width={20} height={20} />
      <MyText
        color={focused ? COLORS.lightGreen : COLORS.grey}
        size={FONT_SIZE.sm}>
        Applications
      </MyText>
      {focused && <View style={styles.bottomBall} />}
    </View>
  );
};
const jobTabIcon = ({focused}: TabIconType) => {
  return (
    <View style={styles.tabBarIconStyle}>
      <JobsIcon width={16} height={16} />
      <MyText
        color={focused ? COLORS.lightGreen : COLORS.grey}
        size={FONT_SIZE.sm}>
        Jobs
      </MyText>
      {focused && <View style={styles.bottomBall} />}
    </View>
  );
};
const messageTabIcon = ({focused}: TabIconType) => {
  return (
    <View style={styles.tabBarIconStyle}>
      <MessageIcon width={20} height={20} />
      <MyText
        color={focused ? COLORS.lightGreen : COLORS.grey}
        size={FONT_SIZE.sm}>
        Message
      </MyText>
      {focused && <View style={styles.bottomBall} />}
    </View>
  );
};

const profileTabIcon = ({focused}: TabIconType) => {
  return (
    <View style={styles.tabBarIconStyle}>
      <View style={styles.avatarBox}>
        <Image
          source={require('../../assets/images/avatar.png')}
          style={styles.avatar}
        />
      </View>
      {focused && <View style={styles.bottomBall} />}
    </View>
  );
};

const Tab = createBottomTabNavigator();
function MainTab() {
  const {APP_MODE} = useSelector((s: RootState) => s.app);
  const isCompanyMode = APP_MODE === 'Company';
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 75,
        },
      }}>
      <Tab.Screen
        name="HomeTabs"
        component={isCompanyMode ? CompanyHomeScreen : HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: homeTabIcon,
        }}
      />
      {isCompanyMode ? (
        <Tab.Screen
          name="JobTab"
          component={JobScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: jobTabIcon,
          }}
        />
      ) : (
        <Tab.Screen
          name="ApplicationTab"
          component={ApplicationScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: applicationTabIcon,
          }}
        />
      )}
      <Tab.Screen
        name="MessageTab"
        component={MessagesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: messageTabIcon,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: profileTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;

const styles = StyleSheet.create({
  tabBarIconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    height: 75,
  },
  bottomBall: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.lightGreen,
    borderRadius: 20,
    position: 'absolute',
    zIndex: -1,
    bottom: -20,
  },
  avatar: {width: '100%', height: '100%', borderRadius: 100},
  avatarBox: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    overflow: 'hidden',
  },
});
