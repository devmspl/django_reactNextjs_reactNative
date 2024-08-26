/* eslint-disable react-native/no-inline-styles */
import {Image, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import PrimaryBtn from '../../components/PrimaryBtn';
import SecondaryBtn from '../../components/SecondarBtn';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import PartyHat from '../../../assets/images/party.png';
const ApplyCompleteScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 30,
          gap: 10,
        }}>
        <Image
          source={PartyHat}
          style={{width: 100, height: 100, resizeMode: 'contain'}}
        />
        <MyText
          bold={FONT_WEIGHT.bold}
          size={FONT_SIZE['1.5xl']}
          color={COLORS.black}>
          Congratulations!
        </MyText>
        <MyText center size={FONT_SIZE.base} color={COLORS.grey}>
          Your application has been Applied! You will recieve an email receipt
          shortly
        </MyText>
      </View>
      <View style={{padding: 20, gap: 20}}>
        <PrimaryBtn text="Search Other Jobs" />
        <SecondaryBtn onPress={() => navigation.goBack()} text="Back to Home" />
      </View>
    </View>
  );
};

export default ApplyCompleteScreen;
