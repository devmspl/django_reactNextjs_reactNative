import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {Pressable} from 'react-native';
import {COLORS, FONT_WEIGHT} from '../../styles';
import {MyText} from '../../components/MyText';
import AllList from './AllList';

const ManageJobsScreen = () => {
  const [tab, setTab] = useState(1);
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Manage Jobs" />

      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 2,
          marginTop: 10,
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
              All
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
              Opening
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
              Closed
            </MyText>
          </View>
        </Pressable>
      </View>

      <AllList />
    </MainLayout>
  );
};

export default ManageJobsScreen;

const styles = StyleSheet.create({});
