import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import MainLayout from '../../components/layout/MainLayout';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import BellSvg from '../../../assets/icons/Notification.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import SearchBox from '../HomeScreen/components/SearchBox';
import ApplicationStatus from './components/ApplicationStatus';
import RecentPeopleApplied from './components/RecentPeopleApplied';
const CompanyHomeScreen = () => {
  const navigate = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout bgColor={COLORS.lightgrey}>
      <View style={styles.headerInfo}>
        <MyText
          size={FONT_SIZE.lg}
          color={COLORS.black}
          bold={FONT_WEIGHT.semibold}>
          Hi, Pixylo LMT.
        </MyText>
        <BellSvg onPress={() => navigate.navigate('Notification')} />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <SearchBox />
        <ApplicationStatus />
        <RecentPeopleApplied />
      </ScrollView>
    </MainLayout>
  );
};

export default CompanyHomeScreen;

const styles = StyleSheet.create({
  headerInfo: {
    marginTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
