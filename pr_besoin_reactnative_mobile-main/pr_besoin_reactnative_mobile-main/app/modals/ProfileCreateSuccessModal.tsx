/* eslint-disable react-native/no-inline-styles */
import {Modal, View} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../styles';
import PrimaryBtn from '../components/PrimaryBtn';
import {MyText} from '../components/MyText';
import DoneSvg from '../../assets/svg/done.svg';
type Props = {
  visible: boolean;
  onContinuePress: () => void;
};

const ProfileCreateSuccessModal = ({visible, onContinuePress}: Props) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0)'}}>
        <View
          style={{
            width: '100%',
            backgroundColor: COLORS.lightGreen,
            height: 280,
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            bottom: 0,
            position: 'absolute',
            padding: 20,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <DoneSvg />
          </View>
          <View style={{gap: 10}}>
            <MyText
              center
              color={COLORS.white}
              bold={FONT_WEIGHT.semibold}
              size={FONT_SIZE['1.5xl']}>
              Successfull
            </MyText>
            <MyText center color={COLORS.white}>
              Your Profile has been created Successfull!
            </MyText>
          </View>
          <PrimaryBtn text="Continue" onPress={onContinuePress} />
        </View>
      </View>
    </Modal>
  );
};

export default ProfileCreateSuccessModal;
