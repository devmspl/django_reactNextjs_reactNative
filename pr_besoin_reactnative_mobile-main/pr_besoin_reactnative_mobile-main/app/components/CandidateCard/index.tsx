import {Image, Pressable, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../MyText';

type Props = {
  onPress?: () => void;
  name: string;
  profession: string;
  tags: string[];
  comanpy: {
    name: string;
    years: string;
  };
  study: {
    name: string;
    years: string;
  };
  image: {uri: string};
};
export const CandidateCard = (prop: Props) => {
  return (
    <Pressable
      onPress={prop.onPress}
      style={{
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 1,
        backgroundColor: COLORS.white,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: COLORS.lightgrey,
            borderRadius: 60,
          }}>
          <Image
            source={prop.image}
            style={{
              width: 60,
              height: 60,
              borderRadius: 60,
            }}
          />
        </View>
        <View>
          <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
            {prop.name}
          </MyText>
          <MyText>{prop.profession}</MyText>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 15, marginVertical: 10}}>
        {prop.tags.map(i => {
          return (
            <MyText
              key={i}
              color={COLORS.lightGreen}
              size={FONT_SIZE.sm}
              style={{
                paddingHorizontal: 5,
                paddingVertical: 1,
                borderRadius: 5,
                backgroundColor: 'rgba(79, 170, 137, 0.2)',
              }}>
              {i}
            </MyText>
          );
        })}
      </View>
      <View style={{gap: 5, marginTop: 5}}>
        <View style={{flexDirection: 'row', gap: 5}}>
          <FontAwesome name="briefcase" size={20} color={COLORS.grey} />
          <MyText
            color={COLORS.black}
            size={FONT_SIZE.base}
            bold={FONT_WEIGHT.bold}>
            {prop.comanpy.name}
          </MyText>
        </View>
        <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
          {prop.comanpy.years}
        </MyText>
      </View>
      <View style={{gap: 5, marginTop: 5}}>
        <View style={{flexDirection: 'row', gap: 5}}>
          <FontAwesome name="graduation-cap" size={20} color={COLORS.grey} />
          <MyText
            color={COLORS.black}
            size={FONT_SIZE.base}
            bold={FONT_WEIGHT.bold}>
            {prop.study.name}
          </MyText>
        </View>
        <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
          {prop.study.years}
        </MyText>
      </View>
    </Pressable>
  );
};
