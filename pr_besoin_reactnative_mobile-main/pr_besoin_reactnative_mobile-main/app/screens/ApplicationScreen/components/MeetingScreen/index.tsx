import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyText} from '../../../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../../styles';
import NoScheduleSvg from '../../../../../assets/illustration/NoSehedule.svg';
const EmptyView = () => {
  return (
    <View style={styles.emptyView}>
      <NoScheduleSvg />
      <MyText size={FONT_SIZE['2xl']} bold={FONT_WEIGHT.bold}>
        No Schedule
      </MyText>
      <MyText color={COLORS.grey}>There is no job interviews set yet</MyText>
    </View>
  );
};

const MeetingScreen = () => {
  return <EmptyView />;
};

export default MeetingScreen;

const styles = StyleSheet.create({
  emptyView: {flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20},
});
