import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import MainLayout from '../../components/layout/MainLayout';
import SearchBox from './components/SearchBox';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import BellSvg from '../../../assets/icons/Notification.svg';
import Categories from './components/Categories';
import Stats from './components/Stats';
import RecommendedJobs from './components/RecommendedJobs';
import RecentJobPosts from './components/RecentJobPosts';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
const HomeScreen = () => {
  const navigate = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <View style={styles.headerInfo}>
        <MyText
          size={FONT_SIZE.lg}
          color={COLORS.black}
          bold={FONT_WEIGHT.semibold}>
          Hi, Jessica!
        </MyText>
        <BellSvg onPress={() => navigate.navigate('Notification')} />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <SearchBox />
        <Categories />
        <Stats />
        <RecommendedJobs />
        <RecentJobPosts />
      </ScrollView>
    </MainLayout>
  );
};

export default HomeScreen;

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
