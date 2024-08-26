import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONT_SIZE} from '../../styles';
import {MyText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';

const Item = ({isActive, title}: {isActive?: boolean; title: string}) => {
  if (isActive) {
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          padding: 5,
          borderRadius: 10,
          backgroundColor: '#4faa891a',
        }}>
        <MyText>{title}</MyText>
        <AntDesign size={18} name="close" />
      </View>
    );
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        padding: 5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.grey,
        paddingHorizontal: 10,
      }}>
      <MyText color={COLORS.grey}>{title}</MyText>
    </View>
  );
};
const SearchSkillScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <MainHeader
        leftArrowStyle={{left: 0}}
        title="Search Skills"
        leftComp={<AntDesign name="close" size={20} color={COLORS.black} />}
      />
      <View
        style={{
          borderRadius: 10,
          borderWidth: 2,
          borderColor: COLORS.lightGreen,
          padding: 20,
          flexWrap: 'wrap',
          flexDirection: 'row',
          gap: 10,
          marginBottom: 20,
        }}>
        <Item title="Graphic Designer" isActive />
        <Item title="UI/UX Desginer" isActive />
        <Item title="Figma" isActive />
      </View>

      <View>
        <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
          Suggested Key Skills
        </MyText>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 10,
            marginBottom: 20,
            marginTop: 10,
          }}>
          <Item title="UI/UX Desginer" />
          <Item title="Design" />
          <Item title="Photoshop" />
          <Item title="Figma" />
          <Item title="Illustrator" />
        </View>
      </View>

      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          width: 130,
          height: 40,
          backgroundColor: COLORS.lightGreen,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          alignSelf: 'flex-end',
        }}>
        <MyText color={COLORS.white}>Done</MyText>
      </Pressable>
    </MainLayout>
  );
};

export default SearchSkillScreen;

const styles = StyleSheet.create({});
