import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT, wp} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import PhoneInput from '../../components/inputs/PhoneInput';
import DateInput from '../../components/inputs/DateInput';
import ProfileCreateSuccessModal from '../../modals/ProfileCreateSuccessModal';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const PersonalInfoCompanyScreen = () => {
  const navigation = useNavigation();
  const [dob, setDob] = useState<Date | null>(new Date());
  const {APP_MODE} = useSelector((s: RootState) => s.app);
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
      <MainLayout headerComp={<MainHeader title="Company Profile" />}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.avatarContainer,
              APP_MODE === 'Company' ? styles.avatarContainerCompany : null,
            ]}>
            <View style={styles.avatarPick}>
              <AntDesign name="camerao" size={15} color={COLORS.white} />
            </View>
          </View>
          <InputWrapper title="Company Name">
            <MyTextInput placeholder="Your Company Name" />
            <InputWrapper title="Company Email">
              <MyTextInput placeholder="example@gmail.com" />
            </InputWrapper>
          </InputWrapper>
          <InputWrapper title="Phone Number">
            <PhoneInput placeholder="1231231234" />
          </InputWrapper>

          <InputWrapper title="Established Date">
            <DateInput onSelect={setDob} placeholder="Pick Date" value={dob} />
          </InputWrapper>

          <InputWrapper title="Job Address Address">
            <MyText
              size={FONT_SIZE.sm}
              color={COLORS.lightGreen}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{position: 'absolute', top: -16, left: wp(38)}}>
              Only shown to registered candidates
            </MyText>
            <MyTextInput placeholder="Enter complete address" />
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

export default PersonalInfoCompanyScreen;

const styles = StyleSheet.create({
  avatarContainer: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.lightgrey,
    borderRadius: 15,
    margin: 20,
    alignSelf: 'center',
  },
  avatarContainerCompany: {
    borderWidth: 2,
    borderColor: COLORS.lightGreen,
    borderRadius: 30,
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
