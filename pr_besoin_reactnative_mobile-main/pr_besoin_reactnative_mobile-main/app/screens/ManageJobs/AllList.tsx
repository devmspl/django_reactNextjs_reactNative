import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
const data = [
  {
    name: 'Graphic Desginer',
    company: 'Company Name',
    des: 'London (Hybrid) . Graduation/Diploma. 0-1 Year',
    type: 'Opening',
  },
  {
    name: 'Graphic Desginer',
    company: 'Company Name',
    des: 'London (Hybrid) . Graduation/Diploma. 0-1 Year',
    type: 'Opening',
  },
  {
    name: 'Product Desginer',
    company: 'Company Name',
    des: 'London (Hybrid) . Graduation/Diploma. 0-1 Year',
    type: 'Closed',
  },
];

const AllList = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        const isOpen = item.type === 'Opening';
        return (
          <Pressable
            onPress={() => navigation.navigate('JobDescription')}
            style={{padding: 10, marginVertical: 10, flexDirection: 'row'}}>
            <View style={{gap: 5}}>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <MyText size={FONT_SIZE.lg} bold={FONT_WEIGHT.bold}>
                  {item.name}
                </MyText>
                <MyText
                  size={FONT_SIZE.sm}
                  style={{
                    paddingHorizontal: 5,
                    borderRadius: 5,
                    paddingVertical: 2,
                    backgroundColor: isOpen
                      ? 'rgba(79, 170, 137, 0.1)'
                      : 'rgba(255, 114, 98, 0.2)',
                  }}
                  color={isOpen ? COLORS.lightGreen : COLORS.red}>
                  {item.type}
                </MyText>
              </View>
              <MyText color={COLORS.grey}>{item.company}</MyText>
              <MyText color={COLORS.grey}>{item.des}</MyText>
            </View>
            <View>
              <Entypo
                name="dots-three-horizontal"
                size={20}
                color={COLORS.black}
              />
            </View>
          </Pressable>
        );
      }}
    />
  );
};

export default AllList;

const styles = StyleSheet.create({});
