import {Pressable, ScrollView, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import PrimaryBtn from '../../components/PrimaryBtn';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import SelectInput from '../../components/inputs/SelectInput';

const Item = ({title}: {title: string}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        padding: 5,
        borderRadius: 15,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        backgroundColor: '#4faa891a',
      }}>
      <MyText color={COLORS.black} size={FONT_SIZE.sm}>
        {title}
      </MyText>
    </View>
  );
};
const SearchCandidateScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader
        leftArrowStyle={{left: 0}}
        title="Search"
        leftComp={<AntDesign name="close" size={20} color={COLORS.black} />}
      />
      <ScrollView>
        <View>
          <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
            Key Skills
          </MyText>
          <View
            style={{
              gap: 5,
              marginBottom: 10,
              marginTop: 10,
            }}>
            <Item title="UI/UX Desginer" />
            <Item title="Photoshop" />
          </View>
          <Pressable onPress={() => navigation.navigate('SearchSkill')}>
            <MyText color={COLORS.lightGreen} size={FONT_SIZE.sm}>
              + Add Skills
            </MyText>
          </Pressable>
        </View>
        <InputWrapper title="Category">
          <SelectInput placeholder="UI/UX Design" />
        </InputWrapper>
        <InputWrapper title="Sub- Category">
          <SelectInput placeholder="Graphic Design" />
        </InputWrapper>
        <InputWrapper title="Location">
          <SelectInput placeholder="7868 California, USA" />
        </InputWrapper>
        <InputWrapper title="Qualification">
          <SelectInput placeholder="Graduate" />
        </InputWrapper>
        <InputWrapper title="Job Type">
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 10,
              marginBottom: 10,
            }}>
            <Pressable
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                backgroundColor: COLORS.lightGreen,
                borderRadius: 10,
                marginTop: 10,
              }}>
              <MyText
                bold={FONT_WEIGHT.semibold}
                color={COLORS.white}
                size={FONT_SIZE.sm}>
                Full Time
              </MyText>
            </Pressable>
            <Pressable
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                backgroundColor: COLORS.lightgrey,
                borderRadius: 10,
                marginTop: 10,
              }}>
              <MyText
                color={COLORS.black}
                bold={FONT_WEIGHT.semibold}
                size={FONT_SIZE.sm}>
                Part Time
              </MyText>
            </Pressable>
            <Pressable
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                backgroundColor: COLORS.lightgrey,
                borderRadius: 10,
                marginTop: 10,
              }}>
              <MyText
                color={COLORS.black}
                bold={FONT_WEIGHT.semibold}
                size={FONT_SIZE.sm}>
                Contract
              </MyText>
            </Pressable>
            <Pressable
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                backgroundColor: COLORS.lightgrey,
                borderRadius: 10,
                marginTop: 10,
              }}>
              <MyText
                color={COLORS.black}
                bold={FONT_WEIGHT.semibold}
                size={FONT_SIZE.sm}>
                Freelance
              </MyText>
            </Pressable>
          </View>
        </InputWrapper>
      </ScrollView>
      <View style={{margin: 20}}>
        <PrimaryBtn
          text="Search Candidate"
          onPress={() => navigation.navigate('SearchCandidateResult')}
        />
      </View>
    </MainLayout>
  );
};

export default SearchCandidateScreen;
