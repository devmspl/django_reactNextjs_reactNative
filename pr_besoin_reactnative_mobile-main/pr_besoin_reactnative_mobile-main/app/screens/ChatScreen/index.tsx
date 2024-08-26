/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {MyText} from '../../components/MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import {FlatList, Image, TextInput, TouchableOpacity, View} from 'react-native';
import LeftArrowSvg from '../../../assets/svg/leftArrow.svg';
import {COLORS, FONT_SIZE, FONT_WEIGHT, wp} from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
const url =
  'https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D';

const ChatHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        gap: 5,
      }}>
      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          navigation.goBack();
        }}
        style={{
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LeftArrowSvg />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'lightgrey',
            borderRadius: 25,
            width: 35,
            height: 35,
            marginRight: 5,
          }}>
          <Image
            source={{uri: url}}
            style={{borderRadius: 25, width: 35, height: 35}}
          />
        </View>
        <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.lg}>
          Sowkot
        </MyText>
      </View>
      <View
        style={{
          backgroundColor: 'lightgrey',
          width: 40,
          height: 40,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Entypo name="dots-three-vertical" size={16} />
      </View>
    </View>
  );
};

const data = [
  {
    id: 1,
    text: 'Do you have a time for interviews today?',
  },
  {
    id: 0,
    text: 'Yes, I have.',
  },
  {
    id: 1,
    text: 'Okay, please meet me at Franklin Avenue at 5 pm',
  },
  {
    id: 0,
    text: 'Roger that sir, thankyou',
  },
];

const ChatScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <ChatHeader />
      <FlatList
        data={data}
        renderItem={({item}) => {
          const isLeft = item.id === 1;
          if (isLeft) {
            return (
              <View
                style={{
                  margin: 10,
                  alignSelf: 'flex-start',
                  alignItems: 'flex-start',
                  gap: 5,
                  width: wp(70),
                }}>
                <View
                  style={{
                    backgroundColor: COLORS.lightgrey,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 10,
                  }}>
                  <MyText color={COLORS.black}>{item.text}</MyText>
                </View>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  9:30 AM
                </MyText>
              </View>
            );
          }
          return (
            <View
              style={{
                margin: 10,
                alignSelf: 'flex-end',
                alignItems: 'flex-end',
                gap: 5,
                width: wp(70),
              }}>
              <View
                style={{
                  backgroundColor: COLORS.lightGreen,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}>
                <MyText color={COLORS.white}>Yes, I have</MyText>
              </View>
              <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                9:30 AM
              </MyText>
            </View>
          );
        }}
      />
      <View style={{padding: 10, flexDirection: 'row', gap: 10}}>
        <View
          style={{
            height: 50,
            flex: 1,
            backgroundColor: COLORS.lightgrey,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}>
          <TextInput placeholder="Type Message..." />
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: COLORS.black,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome name="send" color={COLORS.white} size={20} />
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
