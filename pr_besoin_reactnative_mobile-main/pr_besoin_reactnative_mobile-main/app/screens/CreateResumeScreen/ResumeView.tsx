/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {MyText} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import MainLayout from '../../components/layout/MainLayout';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import Feather from 'react-native-vector-icons/Feather';
import MainHeader from '../../components/layout/MainHeader';
import Line from '../../components/Line';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const naviagtion = useNavigation();
  return (
    <MainLayout>
      <MainHeader title="Resume" leftArrowStyle={{left: 0}} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
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
        <View>
          <MyText bold={FONT_WEIGHT.semibold}>Profile completeness 100%</MyText>
          <View style={styles.barParent}>
            <View style={styles.barChild} />
          </View>
        </View>

        <View>
          <Line containerStyle={{opacity: 0.2}} />
          <View style={{marginVertical: 20, gap: 10}}>
            <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
              Career Objective
            </MyText>
            <MyText size={FONT_SIZE.base}>
              I know i can help your company create stunning visuals. As someone
              who has worked inb marketing and graphic... Read more
            </MyText>
          </View>
          <Line containerStyle={{opacity: 0.2}} />
          <View style={{marginVertical: 20, gap: 10}}>
            <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
              Employment History
            </MyText>
            <View style={{flexDirection: 'row'}}>
              <MyText size={FONT_SIZE.base}>Total Year of Experience: </MyText>
              <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
                2.5 yrs
              </MyText>
            </View>
            <View>
              <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
                1. Production Officer
              </MyText>
              <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
                (March. 2016 - Continuing)
              </MyText>
              <View style={{marginTop: 10}}>
                <MyText
                  size={FONT_SIZE.l}
                  bold={FONT_WEIGHT.semibold}
                  style={{marginLeft: 10}}>
                  IT Institute
                </MyText>
                <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
                  1907 Thornridge Cir, Shiloh, Hawai 81063
                </MyText>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
                2. Assistant Production Officer
              </MyText>
              <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
                (March. 2016 - Continuing)
              </MyText>
              <View style={{marginTop: 10}}>
                <MyText
                  size={FONT_SIZE.l}
                  bold={FONT_WEIGHT.semibold}
                  style={{marginLeft: 10}}>
                  IT Institute
                </MyText>
                <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
                  1907 Thornridge Cir, Shiloh, Hawai 81063
                </MyText>
              </View>
            </View>
          </View>
          <Line containerStyle={{opacity: 0.2}} />
          <View style={{marginVertical: 20, gap: 10}}>
            <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
              Academic Qualification:
            </MyText>
            <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
              {'●  '}Bachelor of Science (BSC)
            </MyText>
            <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
              {'●  '}Diploma in Computer
            </MyText>
            <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
              {'●  '}Diploma in Computer
            </MyText>
          </View>
          <Line containerStyle={{opacity: 0.2}} />
          <View style={{marginVertical: 20, gap: 10}}>
            <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
              Specialization
            </MyText>
            <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
              {'●  '}Production
            </MyText>
            <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
              {'●  '}Quality control/Inspect
            </MyText>
            <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
              {'●  '}Work Study
            </MyText>
            <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
              {'●  '}Data Entry Operator (English)
            </MyText>
          </View>
          <Line containerStyle={{opacity: 0.2}} />
          <View style={{marginVertical: 20, gap: 10}}>
            <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
              Language Proficiency:
            </MyText>
            <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
              1. English
            </MyText>
            <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
              {'●  '}Reading
            </MyText>
            <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
              {'●  '}Writting
            </MyText>
            <MyText size={FONT_SIZE.base} style={{marginLeft: 10}}>
              {'●  '}Speaking
            </MyText>
          </View>
          <Line containerStyle={{opacity: 0.2}} />
          <View style={{marginVertical: 10, gap: 5}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <MyText bold={FONT_WEIGHT.semibold}>Father’s Name:</MyText>
              </View>
              <View style={{flex: 1}}>
                <MyText>Kristin Watson</MyText>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <MyText bold={FONT_WEIGHT.semibold}>Mother Name:</MyText>
              </View>
              <View style={{flex: 1}}>
                <MyText>Wade Warren</MyText>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <MyText bold={FONT_WEIGHT.semibold}>Date of Birth:</MyText>
              </View>
              <View style={{flex: 1}}>
                <MyText>01/01/2023</MyText>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <MyText bold={FONT_WEIGHT.semibold}>Gender:</MyText>
              </View>
              <View style={{flex: 1}}>
                <MyText>Female</MyText>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <MyText bold={FONT_WEIGHT.semibold}>Marital Status:</MyText>
              </View>
              <View style={{flex: 1}}>
                <MyText>Unmarried</MyText>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <MyText bold={FONT_WEIGHT.semibold}>Father’s Name:</MyText>
              </View>
              <View style={{flex: 1}}>
                <MyText>Kristin Watson</MyText>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <MyText bold={FONT_WEIGHT.semibold}>Religion:</MyText>
              </View>
              <View style={{flex: 1}}>
                <MyText>Hindu</MyText>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <MyText bold={FONT_WEIGHT.semibold}>Address:</MyText>
              </View>
              <View style={{flex: 1}}>
                <MyText>4140 Parker Rd. Allentown, New Maxico 31134</MyText>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <MyText bold={FONT_WEIGHT.semibold}>Current Location:</MyText>
              </View>
              <View style={{flex: 1}}>
                <MyText>USA</MyText>
              </View>
            </View>
          </View>
          <Line containerStyle={{opacity: 0.2}} />
        </View>
      </ScrollView>
      <View style={styles.logoutBtnBox}>
        <PrimaryBtn text="Done" />
      </View>
    </MainLayout>
  );
};

export default ProfileScreen;

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
    width: '100%',
    height: 8,
  },
  itemContainer: {
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
    marginTop: 10,
  },
  item: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
