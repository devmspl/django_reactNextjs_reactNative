/* eslint-disable react-native/no-inline-styles */
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp} from '../../styles';
import {MyText} from '../MyText';
import LeftArrowSvg from '../../../assets/svg/leftArrow.svg';
import LeftArrowWhiteSvg from '../../../assets/svg/leftArrowWhite.svg';
import {useNavigation} from '@react-navigation/native';

type Props = {
  nextComp?: React.ReactNode;
  title: string;
  onBackPress?: () => void;
  titleColor?: string;
  leftArrowStyle?: StyleProp<ViewStyle>;
  leftArrowWhite?: boolean;
  leftComp?: React.ReactNode;
};

const MainHeader = ({
  onBackPress,
  title,
  titleColor,
  nextComp,
  leftArrowStyle,
  leftArrowWhite,
  leftComp,
}: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: hp(8),
        flexDirection: 'row',
      }}>
      <View style={[styles.box]}>
        <TouchableOpacity
          onPress={onBackPress || navigation.goBack}
          style={[
            {
              position: 'absolute',
              left: 20,
              zIndex: 1,
            },
            leftArrowStyle,
          ]}>
          {leftComp ? (
            leftComp
          ) : leftArrowWhite ? (
            <LeftArrowWhiteSvg />
          ) : (
            <LeftArrowSvg />
          )}
        </TouchableOpacity>
      </View>
      <View style={[styles.box, {flex: 1}]}>
        <MyText
          size={FONT_SIZE.lg}
          color={titleColor || COLORS.black}
          bold={FONT_WEIGHT.semibold}>
          {title}
        </MyText>
      </View>
      <View style={[styles.box]}>
        <View style={{position: 'absolute', right: 20}}>{nextComp}</View>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    zIndex: -1,
    pointerEvents: 'box-none',
  },
});
