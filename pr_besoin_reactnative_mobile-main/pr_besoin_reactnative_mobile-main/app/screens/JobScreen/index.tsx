/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import MainHeader from '../../components/layout/MainHeader';
import {Pressable, View} from 'react-native';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import JobTab from './JobTab';
import CandidateTab from './CandidateTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';

const JobScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [tab, setTab] = useState(1);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <MainHeader title="Jobs" />
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          marginHorizontal: 20,
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Ionicons
          onPress={() => navigation.navigate('JobPost')}
          name="add-circle"
          size={30}
          color={COLORS.lightGreen}
        />
        <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.l}>
          Post New Job
        </MyText>
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 2,
        }}>
        <Pressable
          onPress={() => setTab(1)}
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '80%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: COLORS.lightGreen,
              borderBottomWidth: tab === 1 ? 2 : 0,
            }}>
            <MyText
              bold={FONT_WEIGHT.semibold}
              color={tab === 1 ? COLORS.lightGreen : COLORS.black}>
              Jobs
            </MyText>
          </View>
        </Pressable>
        <Pressable
          style={{flex: 1, alignItems: 'center'}}
          onPress={() => setTab(2)}>
          <View
            style={{
              width: '80%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: COLORS.lightGreen,
              borderBottomWidth: tab === 2 ? 2 : 0,
            }}>
            <MyText
              bold={FONT_WEIGHT.semibold}
              color={tab === 2 ? COLORS.lightGreen : COLORS.black}>
              All Candidates
            </MyText>
          </View>
        </Pressable>
      </View>

      {tab === 1 ? <JobTab /> : <CandidateTab />}
    </View>
  );
};

export default JobScreen;
