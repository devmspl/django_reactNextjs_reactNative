/* eslint-disable react-native/no-inline-styles */
import {Pressable, ScrollView, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, FONT_SIZE} from '../../styles';
const data = [
  'English',
  'Hindi',
  'Spanish',
  'French',
  'Arabic',
  'Bengali',
  'Russian',
  'Chinese',
];
const Item = ({name}: {name: string}) => {
  const isTrue = name === 'English';
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        marginTop: 15,
        paddingBottom: 15,
        borderBlockColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
      }}>
      <View style={{flex: 1}}>
        <MyText size={FONT_SIZE.lg}>{name}</MyText>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {isTrue ? (
          <Feather color={COLORS.lightGreen} size={24} name="check-square" />
        ) : (
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: COLORS.black,
              marginRight: 2,
            }}
          />
        )}
      </View>
    </Pressable>
  );
};
const LanguageScreen = () => {
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Language" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {data.map(item => {
          return <Item key={item} name={item} />;
        })}
      </ScrollView>
    </MainLayout>
  );
};

export default LanguageScreen;
