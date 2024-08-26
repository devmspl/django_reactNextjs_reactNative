/* eslint-disable react-native/no-inline-styles */
import {Modal, Pressable, View} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../styles';
import {MyText} from '../components/MyText';
type Props = {
  visible: boolean;
  onContinuePress: () => void;
};

const JobCloseModal = ({visible, onContinuePress}: Props) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            backgroundColor: COLORS.white,
            height: 180,
            borderRadius: 20,
            bottom: 0,
            padding: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{gap: 10}}>
            <MyText
              color={COLORS.black}
              bold={FONT_WEIGHT.semibold}
              size={FONT_SIZE['1.5xl']}>
              Are you sure you want to close this Job?
            </MyText>
            <MyText color={COLORS.grey}>
              Job seekers won’t be able to see this job and apply once closed
            </MyText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Pressable onPress={onContinuePress}>
              <MyText
                bold={FONT_WEIGHT.semibold}
                color={COLORS.grey}
                size={FONT_SIZE.sm}>
                Cancel
              </MyText>
            </Pressable>
            <Pressable onPress={onContinuePress}>
              <MyText
                bold={FONT_WEIGHT.semibold}
                color={COLORS.lightGreen}
                size={FONT_SIZE.sm}>
                Confim
              </MyText>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default JobCloseModal;
