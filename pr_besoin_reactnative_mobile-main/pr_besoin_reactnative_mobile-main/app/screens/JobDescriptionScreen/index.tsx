/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../../components/layout/MainHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import Entypo from 'react-native-vector-icons/Entypo';
import {MyText} from '../../components/MyText';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import JobCloseModal from '../../modals/JobCloseModal';
import {RootStackParams} from '../../naviagtion/types';
import Image1 from '../../../assets/images/figma.png';

const JobDescrptionScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<RootStackParams, 'JobDescription'>>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onContinuePress = () => {
    navigation.goBack();
  };
  return (
    <React.Fragment>
      <JobCloseModal visible={isModalOpen} onContinuePress={onContinuePress} />
      <View style={{backgroundColor: COLORS.lightGreen, height: hp(88)}}>
        <MainHeader
          leftArrowWhite={true}
          title="Job Details"
          titleColor="#FFF"
          nextComp={
            <View>
              {params?.mode === 'Preview' ? null : (
                <MaterialCommunityIcons
                  name="share-outline"
                  size={25}
                  color={COLORS.white}
                />
              )}
            </View>
          }
        />
        <View style={styles.sectionOne}>
          <View style={styles.sectionOneRow}>
            <View
              style={[
                styles.imgBox,
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                }}
                source={Image1}
              />
            </View>
            <View>
              <MyText
                size={FONT_SIZE.lg}
                bold={FONT_WEIGHT.semibold}
                color={COLORS.white}>
                Ui Design Lead
              </MyText>
              <MyText size={FONT_SIZE.sm} color={COLORS.white}>
                7368 California, USA
              </MyText>
            </View>
          </View>

          <View style={styles.sectionOneRow2}>
            <View style={styles.sectionOneCat}>
              {['Full Time', 'Remote', 'Experience:2y'].map((item, index) => {
                return (
                  <View key={index} style={styles.sectionOneCatItem}>
                    <MyText color={COLORS.white} size={FONT_SIZE.xs}>
                      {item}
                    </MyText>
                  </View>
                );
              })}
            </View>
            <View style={styles.sectionOnePrice}>
              <MyText
                size={FONT_SIZE.lg}
                bold={FONT_WEIGHT.semibold}
                color={COLORS.white}>
                $10
              </MyText>
              <MyText size={FONT_SIZE.base} color={COLORS.white}>
                /m
              </MyText>
            </View>
          </View>

          {params?.mode === 'Preview' ? null : (
            <MyText
              color={COLORS.white}
              size={FONT_SIZE.sm}
              bold={FONT_WEIGHT.semibold}>
              2 hours ago. 39 Applicants
            </MyText>
          )}
        </View>
        <View style={[styles.sectionTwoRow, {overflow: 'hidden'}]}>
          <ScrollView
            contentContainerStyle={{paddingBottom: hp(25), paddingTop: 30}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View style={{marginHorizontal: 20}}>
              <MyText
                color={COLORS.black}
                size={FONT_SIZE.lg}
                bold={FONT_WEIGHT.bold}>
                Description
              </MyText>
            </View>
            <View
              style={[
                styles.descriptionBox,
                {
                  marginHorizontal: 20,
                },
              ]}>
              <MyText>
                Uniquely incubate alternative relationships and holistic
                manufactured products. Competently iterate distributed
                technologies via multimedia based markets. Progressively
                incubate granular bandwidth with bleeding-edge sources.
              </MyText>
              <MyText>
                Dynamically integrate virtual growth strategies through seamless
                internal or "organic" sources. multimedia based markets.
                Progressively incubate granular bandwidth with bleeding-edge
                sources.
              </MyText>
              <MyText>
                strategies through seamless internal or "organic" sources.
                multimedia based markets.
              </MyText>
            </View>
            <View style={{marginHorizontal: 20, marginTop: 20}}>
              <MyText
                color={COLORS.black}
                size={FONT_SIZE.lg}
                bold={FONT_WEIGHT.bold}>
                Requirements
              </MyText>
            </View>
            <View
              style={[
                styles.descriptionBox,
                {alignItems: 'flex-start', marginHorizontal: 20},
              ]}>
              {[
                'Exceptional communication skills and team working skill',
                'Creative with an eye for shape and colour',
                'Figma,Xd & Sketch must know about this apps',
                'Know the principal of animation and you can create high prtotypes',
                '3 years of relevant industry experience',
                'Excelent problem- solving skills and familiary with technical constrains and limitations',
              ].map(item => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <Entypo name="dot-single" size={24} color={COLORS.black} />
                    <MyText>{item}</MyText>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 20,
            }}>
            {params?.mode === 'Preview' ? (
              <PrimaryBtn
                text="Done"
                containerStyle={{width: 200}}
                onPress={navigation.goBack}
              />
            ) : (
              <React.Fragment>
                <PrimaryBtn
                  text="Edit Post"
                  containerStyle={{
                    width: '40%',
                    backgroundColor: COLORS.lightgrey,
                  }}
                  textStyle={{color: COLORS.black}}
                />
                <PrimaryBtn
                  onPress={() => setIsModalOpen(true)}
                  text="Close Post"
                  containerStyle={{width: '40%'}}
                />
              </React.Fragment>
            )}
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

export default JobDescrptionScreen;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 20,
  },
  bookmarkBtn: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.black,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionOne: {
    backgroundColor: COLORS.lightGreen,
    height: hp(20),
    marginLeft: 30,
  },
  sectionOneRow2: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  sectionOnePrice: {flexDirection: 'row', marginRight: 20},
  sectionOneRow: {flexDirection: 'row', gap: 10, alignItems: 'center'},
  sectionOneCat: {flexDirection: 'row', marginTop: 15},
  sectionOneCatItem: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginRight: 20,
    padding: 5,
    borderRadius: 10,
  },
  imgBox: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  descriptionBox: {
    gap: 20,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  sectionTwoRow: {
    backgroundColor: COLORS.white,
    height: hp(80),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  underline: {
    width: 40,
    height: 1,
    marginTop: 5,
    backgroundColor: COLORS.lightGreen,
  },
  tabBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});
