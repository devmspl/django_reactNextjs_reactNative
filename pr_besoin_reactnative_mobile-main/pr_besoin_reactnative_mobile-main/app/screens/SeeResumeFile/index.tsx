import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONT_WEIGHT, hp, wp} from '../../styles';
import PDFView from 'react-native-view-pdf';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import Octicons from 'react-native-vector-icons/Octicons';
import {MyText} from '../../components/MyText';
const source = {
  uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  cache: true,
};
const SeeResumeFileScreen = () => {
  return (
    <MainLayout bgColor={COLORS.black}>
      <MainHeader
        titleColor="white"
        title="Resume"
        leftArrowWhite
        leftArrowStyle={{left: 0}}
      />
      <PDFView
        fadeInDuration={250.0}
        style={{width: wp(90), height: hp(80)}}
        resource={source.uri}
        resourceType={'url'}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Pressable
          style={{
            width: '80%',
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.lightGreen,
            flexDirection: 'row',
            gap: 10,
          }}>
          <Octicons name="download" color={COLORS.white} size={18} />
          <MyText
            color={COLORS.white}
            bold={FONT_WEIGHT.bold}
            style={{marginBottom: 3.5}}>
            Download
          </MyText>
        </Pressable>
      </View>
    </MainLayout>
  );
};

export default SeeResumeFileScreen;

const styles = StyleSheet.create({});
