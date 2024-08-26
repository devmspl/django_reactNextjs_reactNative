/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MyText} from '../../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../naviagtion/types';
const ApplicationStatus = () => {
  const navigate = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={{marginTop: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <MyText size={FONT_SIZE.lg}>Application Stats</MyText>
        <MyText color={COLORS.lightGreen}>See all</MyText>
      </View>
      <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
        <Pressable
          onPress={() => navigate.navigate('JobPost')}
          style={[
            styles.itemContainer,
            {
              backgroundColor: '#2A9AB7',
            },
          ]}>
          <Ionicons name="add-circle-outline" color={COLORS.white} size={30} />
          <MyText color={COLORS.white} size={FONT_SIZE.l}>
            Post Jew Job
          </MyText>
        </Pressable>
        <View
          style={[
            styles.itemContainer,
            {
              backgroundColor: '#2936A3',
            },
          ]}>
          <MyText color={COLORS.white} size={25} bold={FONT_WEIGHT.bold}>
            5
          </MyText>
          <MyText color={COLORS.white} size={FONT_SIZE.l}>
            Vacancies
          </MyText>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
        <View
          style={[
            styles.itemContainer,
            {
              backgroundColor: '#4FAA89',
            },
          ]}>
          <MyText color={COLORS.white} size={25} bold={FONT_WEIGHT.bold}>
            120
          </MyText>
          <MyText color={COLORS.white} size={FONT_SIZE.l}>
            Applications
          </MyText>
        </View>
        <View
          style={[
            styles.itemContainer,
            {
              backgroundColor: '#FC9236',
            },
          ]}>
          <MyText color={COLORS.white} size={25} bold={FONT_WEIGHT.bold}>
            10
          </MyText>
          <MyText color={COLORS.white} size={FONT_SIZE.l}>
            Interviewed
          </MyText>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
        <View
          style={[
            styles.itemContainer,
            {
              backgroundColor: '#A079EC',
            },
          ]}>
          <Ionicons
            name="exit-outline"
            color={COLORS.white}
            size={28}
            style={{
              transform: [{rotate: '180deg'}],
              alignSelf: 'flex-start',
            }}
          />
          <MyText color={COLORS.white} size={FONT_SIZE.l}>
            Post Jew Job
          </MyText>
        </View>
        <View style={styles.itemContainer} />
      </View>
    </View>
  );
};

export default ApplicationStatus;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 100,
    borderRadius: 15,
    borderBottomEndRadius: 0,
    padding: 10,
    justifyContent: 'center',
  },
});
