/* eslint-disable react-native/no-inline-styles */
import {Image, Pressable, View} from 'react-native';
import React from 'react';
import {MyText} from '../../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../naviagtion/types';

const data = [
  {
    name: 'Keithan Lee',
    profession: 'UI/UX Designer',
    img: require('../../../../assets/images/User1.png'),
  },
  {
    name: 'Keithan Lee',
    profession: 'BDE & BDM ',
    img: require('../../../../assets/images/User2.png'),
  },
];
const RecentPeopleApplied = () => {
  const naviagtion =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={{marginTop: 20, marginBottom: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <MyText size={FONT_SIZE.lg}>Recent people Applied</MyText>
        <MyText color={COLORS.lightGreen}>See all</MyText>
      </View>
      <View style={{gap: 10, marginTop: 10}}>
        {data.map((item, index) => {
          return (
            <Pressable
              onPress={() => {
                naviagtion.navigate('ViewCandidateProfile');
              }}
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                gap: 10,
                borderRadius: 10,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.17,
                shadowRadius: 3.05,
                elevation: 1,
                backgroundColor: COLORS.white,
              }}>
              <View>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: COLORS.lightgrey,
                    borderRadius: 100 / 2,
                  }}>
                  <Image
                    source={item.img}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 100 / 2,
                    }}
                  />
                </View>
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}>
                  <View style={{gap: 4}}>
                    <MyText size={FONT_SIZE.lg} bold={FONT_WEIGHT.semibold}>
                      {item.name}
                    </MyText>
                    <MyText>{item.profession}</MyText>
                  </View>
                  <View style={{gap: 10, flexDirection: 'row'}}>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: 'rgba(79, 170, 137, 0.2)',
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <AntDesign
                        name="message1"
                        color={COLORS.lightGreen}
                        size={15}
                      />
                    </View>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        backgroundColor: 'rgba(79, 170, 137, 0.2)',
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <AntDesign
                        name="videocamera"
                        color={COLORS.lightGreen}
                        size={15}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 3,
                      alignItems: 'center',
                    }}>
                    <SimpleLineIcons
                      name="share-alt"
                      size={15}
                      color={COLORS.lightGreen}
                    />
                    <MyText size={FONT_SIZE.sm} color={COLORS.lightGreen}>
                      See Details
                    </MyText>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 3,
                      alignItems: 'center',
                    }}>
                    <Ionicons
                      name="document-text-outline"
                      size={15}
                      color={COLORS.lightGreen}
                    />
                    <MyText size={FONT_SIZE.sm} color={COLORS.lightGreen}>
                      See Resume
                    </MyText>
                  </View>
                </View>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default RecentPeopleApplied;
