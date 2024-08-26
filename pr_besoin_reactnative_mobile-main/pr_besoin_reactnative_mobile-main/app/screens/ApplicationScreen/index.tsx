/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {COLORS} from '../../styles';
import AppliedScreen from './components/AppliedScreen';
import MeetingScreen from './components/MeetingScreen';
import CompletedScreen from './components/CompletedScreen';

type Tabs = 'Applied' | 'Meating' | 'Completed';

const ApplicationScreen = () => {
  const [activeTab, setActiveTab] = useState<Tabs>('Applied');
  return (
    <View style={styles.mainWrapper}>
      <MainHeader title="My Projects" />
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab('Applied')}
          style={[
            styles.tab,
            {
              borderBottomWidth: activeTab === 'Applied' ? 2 : 1,
              borderBottomColor:
                activeTab === 'Applied' ? COLORS.lightGreen : COLORS.grey,
            },
          ]}>
          <MyText
            color={activeTab === 'Applied' ? COLORS.lightGreen : COLORS.grey}>
            Applied
          </MyText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('Meating')}
          style={[
            styles.tab,
            {
              borderBottomWidth: activeTab === 'Meating' ? 2 : 1,
              borderBottomColor:
                activeTab === 'Meating' ? COLORS.lightGreen : COLORS.grey,
            },
          ]}>
          <MyText
            color={activeTab === 'Meating' ? COLORS.lightGreen : COLORS.grey}
            center>
            Meating
          </MyText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('Completed')}
          style={[
            styles.tab,
            {
              borderBottomWidth: activeTab === 'Completed' ? 2 : 1,
              borderBottomColor:
                activeTab === 'Completed' ? COLORS.lightGreen : COLORS.grey,
            },
          ]}>
          <MyText
            color={activeTab === 'Completed' ? COLORS.lightGreen : COLORS.grey}
            style={styles.endText}>
            Completed
          </MyText>
        </TouchableOpacity>
      </View>
      {activeTab === 'Applied' && <AppliedScreen />}
      {activeTab === 'Meating' && <MeetingScreen />}
      {activeTab === 'Completed' && <CompletedScreen />}
    </View>
  );
};

export default ApplicationScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  tabContainer: {flexDirection: 'row'},
  tab: {
    flex: 1,
    borderBottomColor: COLORS.lightGreen,
    paddingBottom: 10,
    padding: 10,
  },
  endText: {textAlign: 'right'},
});
