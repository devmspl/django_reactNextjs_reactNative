import {FlatList} from 'react-native';
import React from 'react';
import {CandidateCard} from '../../components/CandidateCard';
import Image1 from '../../../assets/images/avatar.png';
import Image2 from '../../../assets/images/User1.png';
import Image3 from '../../../assets/images/User2.png';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
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
    image: Image1,
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
    image: Image2,
  },
  {
    name: 'Sarah',
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
    image: Image3,
  },
];

const CandidateTab = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <FlatList
      style={{backgroundColor: '#f5f5f5'}}
      data={data}
      renderItem={({item}) => {
        return (
          <CandidateCard
            onPress={() => {
              navigation.navigate('ViewCandidateProfile');
            }}
            {...item}
          />
        );
      }}
    />
  );
};

export default CandidateTab;
