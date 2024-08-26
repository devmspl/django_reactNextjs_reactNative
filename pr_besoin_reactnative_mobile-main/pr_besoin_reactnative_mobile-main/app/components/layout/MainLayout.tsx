/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles';

type Props = {
  children: React.ReactNode;
  headerComp?: React.ReactNode;
  bgColor?: string;
};

const MainLayout = ({children, headerComp, bgColor}: Props) => {
  return (
    <View style={{backgroundColor: bgColor || COLORS.white, flex: 1}}>
      <SafeAreaView />
      {headerComp}
      <View style={{flex: 1, marginHorizontal: 20}}>{children}</View>
    </View>
  );
};

export default MainLayout;
