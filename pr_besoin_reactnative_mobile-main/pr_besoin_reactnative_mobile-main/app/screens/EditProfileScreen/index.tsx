/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../../components/MyText';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const SectionTwo = () => {
  return (
    <View
      style={{
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        paddingBottom: 10,
      }}>
      <View
        style={{
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
          About Me
        </MyText>
        <Entypo name="edit" size={18} color={COLORS.lightGreen} />
      </View>
      <View>
        <MyText color={COLORS.grey}>
          I know i can help your company create stunning visuals. As someone who
          has worked inb marketing and graphic...
          <MyText color={COLORS.lightGreen}>Read more</MyText>
        </MyText>
      </View>
    </View>
  );
};

const ContactDetails = () => {
  return (
    <View
      style={{
        marginTop: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
      }}>
      <Entypo
        name="edit"
        size={18}
        color={COLORS.lightGreen}
        style={{position: 'absolute', right: 10}}
      />
      <View style={{marginBottom: 10}}>
        <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.semibold}>
          Fresher
        </MyText>
      </View>
      <View style={{marginBottom: 10}}>
        <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.semibold}>
          01782-392382
        </MyText>
      </View>
      <View style={{marginBottom: 10}}>
        <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.semibold}>
          jessicajung@gmail.com
        </MyText>
      </View>
      <View style={{marginBottom: 10}}>
        <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.semibold}>
          111 California, USA
        </MyText>
      </View>
      <View style={{marginBottom: 10}}>
        <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.semibold}>
          Available to join in 15 Days or less
        </MyText>
      </View>
    </View>
  );
};

const SectionThree = () => {
  return (
    <View
      style={{
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginTop: 15,
      }}>
      <View
        style={{
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
          Skills
        </MyText>
        <Entypo name="edit" size={18} color={COLORS.lightGreen} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
        {[
          'Problem Solving',
          'Technical Skills',
          'IOS',
          'Desgin',
          'Website',
          'Mobile',
          'Android',
        ].map(i => {
          return (
            <View
              key={i}
              style={{
                borderWidth: 1,
                borderColor: COLORS.lightGreen,
                alignSelf: 'flex-start',
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 20,
                marginBottom: 10,
                marginRight: 10,
              }}>
              <MyText size={FONT_SIZE.base} color={COLORS.lightGreen}>
                {i}
              </MyText>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const SectionFour = () => {
  return (
    <View>
      <View
        style={{
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
          My Resume
        </MyText>
        <Entypo name="edit" size={18} color={COLORS.lightGreen} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          backgroundColor: COLORS.lightgrey,
          padding: 15,
          borderRadius: 10,
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: COLORS.lightGreen,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Entypo
            size={24}
            name="text-document-inverted"
            color={COLORS.white}
          />
        </View>
        <View style={{gap: 5}}>
          <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
            Jessica Jung
          </MyText>
          <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
            Updated on 09 September 2023
          </MyText>
        </View>
      </View>
    </View>
  );
};
const EditProfileScreen = () => {
  return (
    <MainLayout headerComp={<MainHeader title="Profile" />}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.section1}>
          <View style={styles.imageBox}>
            <Image
              source={require('../../../assets/images/avatar.png')}
              style={styles.image}
            />
            <Feather
              name="edit-2"
              color={COLORS.lightGreen}
              size={15}
              style={styles.editIcon}
            />
          </View>

          <View style={styles.textBox1}>
            <MyText size={FONT_SIZE.xl} bold={FONT_WEIGHT.semibold}>
              Jessica Jung
            </MyText>
            <MyText color={COLORS.grey}>Senior Desginer</MyText>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
            paddingBottom: 10,
            marginBottom: 15,
          }}>
          <MyText bold={FONT_WEIGHT.semibold}>Profile completeness 87%</MyText>
          <View style={styles.barParent}>
            <View style={styles.barChild} />
          </View>
        </View>
        <SectionTwo />
        <ContactDetails />
        <SectionThree />
        <SectionFour />
      </ScrollView>
    </MainLayout>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  logoutBtnBox: {
    marginVertical: 10,
  },
  section1: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  textBox1: {flex: 1, gap: 5, paddingLeft: 20},
  editIcon: {position: 'absolute', bottom: 0, right: 0},
  imageBox: {
    width: 65,
    height: 65,
    borderRadius: 65,
    backgroundColor: COLORS.lightgrey,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 65,
    zIndex: -1,
  },
  settingBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightgrey,
    borderRadius: 20,
    width: 55,
    height: 55,
  },
  barParent: {
    backgroundColor: 'lightgrey',
    width: '100%',
    height: 8,
    borderRadius: 20,
    marginVertical: 10,
    overflow: 'hidden',
  },
  barChild: {
    backgroundColor: COLORS.lightGreen,
    width: '80%',
    height: 8,
  },
});
