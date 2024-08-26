/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from './sheets';
import {FONT_WEIGHT} from '../styles';
import {MyText} from '../components/MyText';

const GenderSelectSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.GenderSelectSheet);
  };

  const handleSelect = (gender: {label: string; value: string}) => {
    props?.payload?.onSelect(gender);
    close();
  };

  return (
    <ActionSheet id={props.sheetId} gestureEnabled={false}>
      <MyText
        bold={FONT_WEIGHT.bold}
        style={{textAlign: 'center', paddingTop: 10}}>
        Pick One
      </MyText>

      <View style={{padding: 30, gap: 30}}>
        <TouchableOpacity
          onPress={() => handleSelect({label: 'Male', value: 'male'})}>
          <MyText> Male</MyText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handleSelect({
              label: 'Female',
              value: 'female',
            })
          }>
          <MyText> Female</MyText>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

export default GenderSelectSheet;
