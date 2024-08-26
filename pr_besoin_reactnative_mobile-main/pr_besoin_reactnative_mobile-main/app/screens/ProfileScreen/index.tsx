/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {MyText} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MainLayout from '../../components/layout/MainLayout';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import bookmarkSvg from '../../../assets/icons/setting/bookmark.svg';
import createResumeSvg from '../../../assets/icons/setting/create-resume.svg';
import editProfileSvg from '../../../assets/icons/setting/edit-profile.svg';
import notificationkSvg from '../../../assets/icons/setting/notification.svg';
import passwordkSvg from '../../../assets/icons/setting/password.svg';
import resumeUpdateSvg from '../../../assets/icons/setting/resume-update.svg';
import skillSvg from '../../../assets/icons/setting/skill.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

//candidate
const data = [
  {
    id: 1,
    title: 'Edit Profile',
    icon: editProfileSvg,
    navigateTo: 'EditProfile',
  },
  {
    id: 2,
    title: 'Update your Resume',
    icon: resumeUpdateSvg,
    navigateTo: 'UploadCVScreen',
  },
  {
    id: 3,
    title: 'Create Resume',
    icon: createResumeSvg,
    navigateTo: 'CreateResumeScreen',
  },
  {
    id: 4,
    title: 'Skills Assesment',
    navigateTo: 'SkillAssessment',
    icon: skillSvg,
  },
  {
    id: 5,
    title: 'Bookmark',
    icon: bookmarkSvg,
    navigateTo: 'Bookmark',
  },
  {
    id: 6,
    title: 'Subscription Plan',
    icon: () => (
      <Feather
        name="dollar-sign"
        color={COLORS.black}
        size={18}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginLeft: -3}}
      />
    ),
    navigateTo: 'Subscription',
  },
  {
    id: 7,
    title: 'Notification',
    icon: notificationkSvg,
    navigateTo: 'Notification',
  },
  {
    id: 8,
    title: 'Change Password',
    icon: passwordkSvg,
    navigateTo: 'ChangePassword',
  },
];

//compnay
const compnayDataList = [
  {
    id: 1,
    title: 'Edit Profile',
    icon: editProfileSvg,
    navigateTo: 'CompanyEditProfile',
  },
  {
    id: 3,
    title: 'Manage Jobs',
    icon: () => <Entypo name="briefcase" color={COLORS.black} size={15} />,
    navigateTo: 'ManageJobs',
  },
  {
    id: 6,
    title: 'Subscription Plan',
    icon: () => (
      <Feather
        name="dollar-sign"
        color={COLORS.black}
        size={18}
        style={{marginLeft: -3}}
      />
    ),
    navigateTo: 'Subscription',
  },
  {
    id: 7,
    title: 'Notification',
    icon: notificationkSvg,
    navigateTo: 'Notification',
  },
  {
    id: 8,
    title: 'Change Password',
    icon: passwordkSvg,
    navigateTo: 'ChangePassword',
  },
  {
    id: 9,
    title: 'Settings',
    icon: () => (
      <EvilIcons
        name="gear"
        color={COLORS.black}
        size={FONT_SIZE['1.5xl']}
        style={{marginLeft: -3}}
      />
    ),
    navigateTo: 'Setting',
  },
];

const ProfileScreen = () => {
  const {APP_MODE} = useSelector((s: RootState) => s.app);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const isCompanyMode = APP_MODE === 'Company';
  return (
    <MainLayout>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.section1}>
          <View style={styles.imageBox}>
            <Image
              source={
                isCompanyMode
                  ? require('../../../assets/images/companyImage.png')
                  : require('../../../assets/images/avatar.png')
              }
              style={styles.image}
            />
            <Feather
              name="edit-2"
              color={COLORS.lightGreen}
              size={15}
              style={styles.editIcon}
            />
          </View>

          <View style={styles.textBox1}>
            <MyText size={FONT_SIZE.xl} bold={FONT_WEIGHT.semibold}>
              {isCompanyMode ? 'Pixylo' : 'Jessica Jung'}
            </MyText>
            <MyText color={COLORS.grey}>
              {isCompanyMode ? 'Software Company' : 'Senior Desginer'}
            </MyText>
          </View>

          {isCompanyMode ? null : (
            <Pressable
              onPress={() => navigation.navigate('Setting')}
              style={styles.settingBox}>
              <EvilIcons
                name="gear"
                color={COLORS.black}
                size={FONT_SIZE['1.5xl']}
              />
            </Pressable>
          )}
        </View>
        {isCompanyMode ? null : (
          <View>
            <MyText bold={FONT_WEIGHT.semibold}>
              Profile completeness 87%
            </MyText>
            <View style={styles.barParent}>
              <View style={styles.barChild} />
            </View>
          </View>
        )}
        <View style={styles.itemContainer}>
          {isCompanyMode
            ? compnayDataList.map(item => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.item}
                    onPress={() => {
                      if (item.navigateTo) {
                        // @ts-ignore
                        navigation.navigate(item.navigateTo);
                      }
                    }}>
                    {/* @ts-ignore */}
                    {item.icon()}
                    <MyText>{item.title}</MyText>
                  </TouchableOpacity>
                );
              })
            : data.map(item => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.item}
                    onPress={() => {
                      if (item.navigateTo) {
                        // @ts-ignore
                        navigation.navigate(item.navigateTo);
                      }
                    }}>
                    {/* @ts-ignore */}
                    {item.icon()}
                    <MyText>{item.title}</MyText>
                  </TouchableOpacity>
                );
              })}
        </View>
      </ScrollView>
      <View style={styles.logoutBtnBox}>
        <PrimaryBtn
          text="Logout"
          onPress={() => {
            // @ts-ignore
            navigation.navigate('Logout');
          }}
        />
      </View>
    </MainLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  logoutBtnBox: {
    marginVertical: 10,
  },
  section1: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  textBox1: {flex: 1, gap: 5, paddingLeft: 20},
  editIcon: {position: 'absolute', bottom: 0, right: 0},
  imageBox: {
    width: 65,
    height: 65,
    borderRadius: 65,
    backgroundColor: COLORS.lightgrey,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 65,
    zIndex: -1,
  },
  settingBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightgrey,
    borderRadius: 20,
    width: 55,
    height: 55,
  },
  barParent: {
    backgroundColor: 'lightgrey',
    width: '100%',
    height: 8,
    borderRadius: 20,
    marginVertical: 10,
    overflow: 'hidden',
  },
  barChild: {
    backgroundColor: COLORS.lightGreen,
    width: '80%',
    height: 8,
  },
  itemContainer: {
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
    marginTop: 10,
  },
  item: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
