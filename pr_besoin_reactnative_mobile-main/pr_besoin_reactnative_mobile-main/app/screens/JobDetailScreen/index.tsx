/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../../components/layout/MainHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import Entypo from 'react-native-vector-icons/Entypo';
import {MyText} from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import {RootStackParams} from '../../naviagtion/types';
import Image1 from '../../../assets/images/figma.png';

const JobDetailScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const {params} = useRoute<RouteProp<RootStackParams, 'JobDetail'>>();

  return (
    <React.Fragment>
      <View style={{backgroundColor: COLORS.lightGreen, height: hp(88)}}>
        <MainHeader
          leftArrowWhite={true}
          title="Job Details"
          titleColor="#FFF"
          nextComp={
            <View>
              <MaterialCommunityIcons
                name="share-outline"
                size={25}
                color={COLORS.white}
              />
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

          <MyText
            color={COLORS.white}
            size={FONT_SIZE.sm}
            bold={FONT_WEIGHT.semibold}>
            2 hours ago. 39 Applicants
          </MyText>
        </View>
        <View style={styles.sectionTwoRow}>
          <View style={styles.tabBox}>
            <TouchableOpacity
              onPress={() => setActiveTab(0)}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <MyText
                bold={
                  activeTab === 0 ? FONT_WEIGHT.semibold : FONT_WEIGHT.normal
                }>
                Description
              </MyText>
              {activeTab === 0 && <View style={styles.underline} />}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab(1)}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <MyText
                bold={
                  activeTab === 1 ? FONT_WEIGHT.semibold : FONT_WEIGHT.normal
                }>
                Requirements
              </MyText>
              {activeTab === 1 && <View style={styles.underline} />}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab(2)}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <MyText
                bold={
                  activeTab === 2 ? FONT_WEIGHT.semibold : FONT_WEIGHT.normal
                }>
                Company
              </MyText>
              {activeTab === 2 && <View style={styles.underline} />}
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{paddingBottom: hp(25)}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            {activeTab === 0 && (
              <View style={styles.descriptionBox}>
                <MyText>
                  Uniquely incubate alternative relationships and holistic
                  manufactured products. Competently iterate distributed
                  technologies via multimedia based markets. Progressively
                  incubate granular bandwidth with bleeding-edge sources.
                </MyText>
                <MyText>
                  Dynamically integrate virtual growth strategies through
                  seamless internal or "organic" sources. multimedia based
                  markets. Progressively incubate granular bandwidth with
                  bleeding-edge sources.
                </MyText>
                <MyText>
                  strategies through seamless internal or "organic" sources.
                  multimedia based markets.
                </MyText>
              </View>
            )}
            {activeTab === 1 && (
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
                      <Entypo
                        name="dot-single"
                        size={24}
                        color={COLORS.black}
                      />
                      <MyText>{item}</MyText>
                    </View>
                  );
                })}
              </View>
            )}
            {activeTab === 2 && (
              <View>
                <View
                  style={{
                    padding: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 20,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'lightgrey',
                      width: 100,
                      height: 100,
                      borderRadius: 20,
                    }}
                  />
                  <View style={{gap: 10}}>
                    <View>
                      <MyText size={FONT_SIZE.lg} bold={FONT_WEIGHT.semibold}>
                        Pixency.LTD
                      </MyText>
                      <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                        Design institute
                      </MyText>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                      }}>
                      <AntDesign
                        name="star"
                        color={COLORS.lightGreen}
                        size={18}
                      />
                      <MyText color={COLORS.black} bold={FONT_WEIGHT.bold}>
                        5.0
                      </MyText>
                      <MyText
                        color={COLORS.lightGreen}
                        size={FONT_SIZE.sm}
                        style={{textDecorationLine: 'underline'}}>
                        23 Google reviews
                      </MyText>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    width: '90%',
                    marginHorizontal: 'auto',
                    paddingHorizontal: 5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View style={{flex: 1, flexDirection: 'row', gap: 5}}>
                      <Feather
                        size={15}
                        color={COLORS.lightGreen}
                        name="phone-call"
                      />
                      <MyText size={FONT_SIZE.sm} color={COLORS.black}>
                        01782-392382
                      </MyText>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', gap: 5}}>
                      <Entypo
                        size={15}
                        color={COLORS.lightGreen}
                        name="location-pin"
                      />
                      <MyText size={FONT_SIZE.sm} color={COLORS.black}>
                        House 11, Road 04, Block J, Dhaka 1219
                      </MyText>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'row', gap: 5}}>
                      <Entypo size={15} color={COLORS.lightGreen} name="mail" />
                      <MyText size={FONT_SIZE.sm} color={COLORS.black}>
                        pixency@gmail.com
                      </MyText>
                    </View>
                  </View>
                </View>

                <View style={{padding: 20}}>
                  <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE.xl}>
                    About Pixency
                  </MyText>
                  <MyText color={COLORS.grey}>
                    Dynamically integrate virtual growth strategies through
                    seamless internal or "organic" sources. multimedia based
                    markets progressively incubate.
                  </MyText>
                </View>

                <FlatList
                  style={{marginBottom: 20}}
                  data={[1, 1, 1]}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  renderItem={() => {
                    return (
                      <React.Fragment>
                        <View
                          style={{
                            backgroundColor: COLORS.grey,
                            width: 200,
                            height: 100,
                            borderRadius: 20,
                            marginLeft: 20,
                          }}
                        />
                      </React.Fragment>
                    );
                  }}
                />
              </View>
            )}
          </ScrollView>
        </View>
        {/* <View style={styles.btnContainer}>
        <PrimaryBtn
          containerStyle={{flex: 1}}
          text="Apply"
          onPress={() => {
            // @ts-ignore
            navigation.navigate('ApplyJob');
          }}
        />
        <TouchableOpacity style={styles.bookmarkBtn}>
          <MaterialCommunityIcons
            name="bookmark-minus-outline"
            color={COLORS.white}
            size={25}
          />
        </TouchableOpacity>
      </View> */}
      </View>
      {params?.mode === null ||
        (params?.mode === undefined ? (
          <View style={styles.btnContainer}>
            <PrimaryBtn
              containerStyle={{flex: 1}}
              text="Apply"
              onPress={() => {
                // @ts-ignore
                navigation.navigate('ApplyJob');
              }}
            />
            <TouchableOpacity style={styles.bookmarkBtn}>
              <MaterialCommunityIcons
                name="bookmark-minus-outline"
                color={COLORS.white}
                size={25}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.btnContainer}>
            <PrimaryBtn
              containerStyle={{flex: 1}}
              text="Post"
              onPress={() => {
                // @ts-ignore
                navigation.navigate('JobPostConfirm');
              }}
            />
          </View>
        ))}
    </React.Fragment>
  );
};

export default JobDetailScreen;

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
