import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {MyText} from '../../components/MyText';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, wp} from '../../styles';
import Line from '../../components/Line';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import PDFView from 'react-native-view-pdf';
const source = {
  uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  cache: true,
};

const resources = {
  url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
};
const ResumeTab = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={{paddingVertical: 10}}>
      <View
        style={{
          marginTop: 5,
          marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <MyText>Attached Resume</MyText>
        </View>
        <View style={{flexDirection: 'row', gap: 20}}>
          <AntDesign
            name="eyeo"
            onPress={() => {
              navigation.navigate('SeeResumeFile');
            }}
            size={20}
            color={COLORS.grey}
          />
          <Octicons name="download" size={20} color={COLORS.grey} />
        </View>
      </View>
      <Line color="lightgrey" />

      <View
        style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
        <PDFView
          fadeInDuration={250.0}
          style={{width: wp(90), height: 500}}
          resource={source.uri}
          resourceType={'url'}
        />
      </View>
    </View>
  );
};

export default ResumeTab;

const styles = StyleSheet.create({});
