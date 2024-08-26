/* eslint-disable react-native/no-inline-styles */
import {Pressable, View} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../../components/layout/MainHeader';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../../components/MyText';
import AllAppliesTab from './AllAppliesTab';
import ShortlistedTab from './ShortListedTab';
import RejectedTab from './RejectedTab';

const JobAppliesScreen = () => {
  const [tab, setTab] = useState(1);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <MainHeader title="Jobs" />
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 20,
          backgroundColor: COLORS.lightgrey,
          padding: 15,
          borderRadius: 10,
          gap: 5,
        }}>
        <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE.xl}>
          UX Design
        </MyText>
        <MyText color={COLORS.grey}>Pixylo LMT.</MyText>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <MyText size={FONT_SIZE.sm}>London (Hybrid)</MyText>
          <View
            style={{
              width: 5,
              height: 5,
              borderRadius: 5,
              backgroundColor: COLORS.red,
            }}
          />
          <MyText size={FONT_SIZE.sm}>2 Job Openings</MyText>
        </View>
        <View>
          <MyText color={COLORS.lightGreen} size={FONT_SIZE.sm}>
            5 Candidates
          </MyText>
        </View>
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
              All Applies(5)
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
              Shortlisted(1)
            </MyText>
          </View>
        </Pressable>
        <Pressable
          style={{flex: 1, alignItems: 'center'}}
          onPress={() => setTab(3)}>
          <View
            style={{
              width: '80%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: COLORS.lightGreen,
              borderBottomWidth: tab === 3 ? 2 : 0,
            }}>
            <MyText
              bold={FONT_WEIGHT.semibold}
              color={tab === 3 ? COLORS.lightGreen : COLORS.black}>
              Rejected(1)
            </MyText>
          </View>
        </Pressable>
      </View>
      {tab === 1 ? <AllAppliesTab /> : null}
      {tab === 2 ? <ShortlistedTab /> : null}
      {tab === 3 ? <RejectedTab /> : null}
    </View>
  );
};

export default JobAppliesScreen;
