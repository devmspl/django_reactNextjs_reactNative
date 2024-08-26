import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import Image1 from '../../../assets/images/figma.png';
import Image2 from '../../../assets/images/animater.png';
import Image3 from '../../../assets/images/shopify.png';

const data = [
  {
    name: 'Software Desgin',
    tags: ['Full Time', 'In House', 'Experience: 3y'],
    salary: '$12k',
    img: Image1,
  },
  {
    name: 'UX Desgin',
    tags: ['Full Time', 'Remote', 'Experience: 2y'],
    salary: '$10k',
    img: Image2,
  },
  {
    name: 'Product Desgin',
    tags: ['Full Time', 'Remote', 'Experience: 2y'],
    salary: '$15k',
    img: Image3,
  },
  {
    name: 'Shopify Desinger',
    tags: ['Full Time', 'Remote', 'Experience: 2y'],
    salary: '$8k',
    img: Image1,
  },
];
type Props = {
  isSelected: boolean;
  active: boolean;
  tags: string[];
  salary: string;
  name: string;
  img: {uri: string};
};
const Item = ({isSelected, name, tags, salary, img, active}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Pressable
      onPress={() => navigation.navigate('JobApplies')}
      style={{
        backgroundColor: isSelected ? '#4FAA89' : '#F5F5F5',
        marginHorizontal: 20,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        marginTop: 10,
      }}>
      <View>
        <View
          style={{
            width: 15,
            height: 15,
            borderRadius: 15,
            backgroundColor: 'lightgrey',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-end',
          }}>
          <View
            style={{
              width: 9,
              height: 9,
              borderRadius: 9,
              backgroundColor: !active ? COLORS.red : COLORS.lightGreen,
            }}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 15,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={img}
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: COLORS.white,
              resizeMode: 'contain',
            }}
          />
        </View>
        <MyText
          color={isSelected ? COLORS.white : COLORS.black}
          size={FONT_SIZE.l}
          bold={FONT_WEIGHT.bold}>
          {name}
        </MyText>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
        <View style={{flex: 1, flexDirection: 'row', gap: 10}}>
          {tags.map(i => {
            return (
              <MyText
                key={i}
                color={isSelected ? COLORS.white : COLORS.black}
                size={FONT_SIZE.xs}
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 1,
                  borderRadius: 5,
                  backgroundColor: !isSelected
                    ? COLORS.white
                    : 'rgba(255,255,255,0.1)',
                  alignSelf: 'flex-start',
                }}>
                {i}
              </MyText>
            );
          })}
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <MyText
            color={isSelected ? COLORS.white : COLORS.lightGreen}
            size={FONT_SIZE.lg}
            bold={FONT_WEIGHT.bold}>
            {salary}
          </MyText>
          <MyText color={COLORS.grey}>/avg</MyText>
        </View>
      </View>
    </Pressable>
  );
};
const JobTab = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => {
        return (
          <Item
            isSelected={index === 1}
            name={item.name}
            tags={item.tags}
            active={index !== 2}
            img={item.img}
            salary={item.salary}
          />
        );
      }}
    />
  );
};

export default JobTab;

const styles = StyleSheet.create({});
