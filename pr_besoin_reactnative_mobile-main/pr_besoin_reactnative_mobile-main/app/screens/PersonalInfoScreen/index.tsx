import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_WEIGHT} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import PhoneInput from '../../components/inputs/PhoneInput';
import SelectInput from '../../components/inputs/SelectInput';
import DateInput from '../../components/inputs/DateInput';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import ProfileCreateSuccessModal from '../../modals/ProfileCreateSuccessModal';
import {useNavigation} from '@react-navigation/native';

const PersonalInfoScreen = () => {
  const navigation = useNavigation();
  const [dob, setDob] = useState<Date | null>(null);
  const [gender, setGender] = useState<{label: string; value: string} | null>(
    null,
  );
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  return (
    <React.Fragment>
      <ProfileCreateSuccessModal
        visible={isSuccessModalOpen}
        onContinuePress={() => {
          setIsSuccessModalOpen(false);
          // @ts-ignore
          navigation.navigate('MainTab');
        }}
      />
      <MainLayout
        headerComp={
          <MainHeader
            title="Personal Info"
            nextComp={
              <MyText color={COLORS.lightGreen} bold={FONT_WEIGHT.semibold}>
                Skip
              </MyText>
            }
          />
        }>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarPick}>
              <AntDesign name="camerao" size={15} color={COLORS.white} />
            </View>
          </View>
          <InputWrapper title="Name">
            <MyTextInput placeholder="Jessica Jung" />
          </InputWrapper>
          <InputWrapper title="Phone Number">
            <PhoneInput placeholder="1231231234" />
          </InputWrapper>
          <InputWrapper title="Email Address">
            <MyTextInput placeholder="jessica@gmail.com" />
          </InputWrapper>
          <InputWrapper title="Date of Birth">
            <DateInput onSelect={setDob} placeholder="Pick Date" value={dob} />
          </InputWrapper>
          <InputWrapper title="Gender">
            <SelectInput
              value={gender?.label}
              placeholder="Pick Gender"
              onPress={() =>
                SheetManager.show(SHEETS.GenderSelectSheet, {
                  // @ts-ignore
                  payload: {onSelect: setGender},
                })
              }
            />
          </InputWrapper>
        </ScrollView>
        <View style={styles.continueBtn}>
          <PrimaryBtn
            text="Continue"
            onPress={() => setIsSuccessModalOpen(true)}
          />
        </View>
      </MainLayout>
    </React.Fragment>
  );
};

export default PersonalInfoScreen;

const styles = StyleSheet.create({
  avatarContainer: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.lightgrey,
    borderRadius: 15,
    margin: 20,
    alignSelf: 'center',
  },
  avatarPick: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.lightGreen,
    borderRadius: 30,
    position: 'absolute',
    bottom: -5,
    right: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueBtn: {marginBottom: 10},
});
