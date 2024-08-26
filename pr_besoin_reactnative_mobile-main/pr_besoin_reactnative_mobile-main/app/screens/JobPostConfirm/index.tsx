import {View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import JobPostConfrimSvg from '../../../assets/illustration/JobPostCondirm.svg';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
const JobPostConfirmScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 100,
        }}>
        <JobPostConfrimSvg />
        <MyText
          bold={FONT_WEIGHT.bold}
          size={FONT_SIZE['2xl']}
          style={{marginVertical: 10}}>
          Congratulations!
        </MyText>
        <MyText color={COLORS.grey}>Your Job has been posted! </MyText>
      </View>
      <View style={{margin: 20}}>
        <PrimaryBtn
          text="View Job"
          onPress={() => {
            navigation.navigate('JobDescription', {
              mode: 'Preview',
            });
          }}
        />
      </View>
    </MainLayout>
  );
};

export default JobPostConfirmScreen;
