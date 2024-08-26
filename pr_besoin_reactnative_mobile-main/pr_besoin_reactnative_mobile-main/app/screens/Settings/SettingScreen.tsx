/* eslint-disable react-native/no-inline-styles */
import {Pressable, ScrollView, StyleSheet, Switch, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {FONT_SIZE} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';

const SettingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Settings" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.row}>
            <MyText>Dark Mode</MyText>
            <Switch value={false} />
          </View>

          <Pressable
            onPress={() => navigation.navigate('ReferAndEarn')}
            style={styles.row}>
            <MyText>Refer & Earn</MyText>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('CarrerTips')}
            style={styles.row}>
            <MyText>Career Tips</MyText>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Language')}
            style={styles.row}>
            <MyText>Language</MyText>
          </Pressable>
        </View>
        <View style={{marginVertical: 10}}>
          <MyText style={{opacity: 0.5}}>Support</MyText>
          <Pressable
            onPress={() => navigation.navigate('Faq')}
            style={{marginTop: 15}}>
            <MyText size={FONT_SIZE.l}>FAQ</MyText>
          </Pressable>
          <Pressable style={{marginTop: 15}}>
            <MyText size={FONT_SIZE.l}>Help</MyText>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('TermAndCondition')}
            style={{marginTop: 15}}>
            <MyText size={FONT_SIZE.l}>Terms & Condition</MyText>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('PrivacyPolicy')}
            style={{marginTop: 15}}>
            <MyText size={FONT_SIZE.l}>Privacy Policy</MyText>
          </Pressable>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginVertical: 10,
  },
});
