import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import SearchBox from '../HomeScreen/components/SearchBox';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {CandidateCard} from '../../components/CandidateCard';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import ProfileImage from '../../../assets/images/avatar.png';
import Profile2Image from '../../../assets/images/User1.png';
const data = [
  {
    name: 'Jessica Jung',
    profession: 'Graphic Desginer',
    tags: ['Bechlors', '1-3 Years', '$90-$120'],
    comanpy: {
      name: 'Company Name - Senior Desginer',
      years: '2018 - 2020',
    },
    study: {
      name: 'University of Washington',
      years: '2015 - 2018',
    },
    image: ProfileImage,
  },
  {
    name: 'Keithan Lee',
    profession: 'Graphic Desginer',
    tags: ['Bechlors', '1-3 Years', '$90-$120'],
    comanpy: {
      name: 'Company Name - Senior Desginer',
      years: '2018 - 2020',
    },
    study: {
      name: 'University of Washington',
      years: '2015 - 2018',
    },
    image: Profile2Image,
  },
];

const SearchCandidateResultScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader title="Search Candidates" leftArrowStyle={{left: 0}} />
      <SearchBox />
      <View style={{marginTop: 20}}>
        <MyText
          bold={FONT_WEIGHT.bold}
          color={COLORS.black}
          size={FONT_SIZE.lg}>
          56 Job Found
        </MyText>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <CandidateCard
              {...item}
              onPress={() => {
                navigation.navigate('ViewCandidateProfile');
              }}
            />
          );
        }}
      />
    </MainLayout>
  );
};

export default SearchCandidateResultScreen;

const styles = StyleSheet.create({});
