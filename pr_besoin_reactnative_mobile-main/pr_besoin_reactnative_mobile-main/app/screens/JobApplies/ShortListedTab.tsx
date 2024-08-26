import {FlatList} from 'react-native';
import React from 'react';
import {CandidateCard} from '../../components/CandidateCard';
import Image3 from '../../../assets/images/User2.png';
const data = [
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
    image: Image3,
  },
];

const ShortlistedTab = () => {
  return (
    <FlatList
      style={{backgroundColor: '#f5f5f5'}}
      contentContainerStyle={{paddingVertical: 10}}
      data={data}
      renderItem={({item}) => {
        return <CandidateCard {...item} />;
      }}
    />
  );
};

export default ShortlistedTab;
