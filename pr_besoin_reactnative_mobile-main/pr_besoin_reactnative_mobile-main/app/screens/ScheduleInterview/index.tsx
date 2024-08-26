/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import DateInput from '../../components/inputs/DateInput';
import SelectInput from '../../components/inputs/SelectInput';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import InterviewScheduleSuccessModal from '../../modals/InterviewScheduleSuccessModal';
import Image1 from '../../../assets/images/avatar.png';
import Image2 from '../../../assets/images/User1.png';
const ScheduleInterviewScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <MainLayout>
      <InterviewScheduleSuccessModal
        visible={isModalVisible}
        onContinuePress={() => navigation.goBack()}
      />
      <MainHeader title="Sechedule an Interview" leftArrowStyle={{left: 0}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InputWrapper title="Name">
          <MyTextInput placeholder="Jessica Jung" />
        </InputWrapper>
        <InputWrapper title="Interview Type">
          <SelectInput placeholder="Face To Face" />
        </InputWrapper>
        <InputWrapper title="Date">
          <DateInput placeholder="20/09/22" />
        </InputWrapper>
        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{flex: 1}}>
            <InputWrapper title="Start Date">
              <DateInput placeholder="20/09/22" />
            </InputWrapper>
          </View>
          <View style={{flex: 1}}>
            <InputWrapper title="End Date">
              <DateInput placeholder="20/09/22" />
            </InputWrapper>
          </View>
        </View>
        <InputWrapper title="Address">
          <MyTextInput
            placeholder="Address"
            containerStyle={{height: 100}}
            inputStyle={{textAlignVertical: 'top'}}
          />
        </InputWrapper>
        <View style={{marginVertical: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MyText>Add Interviewers*</MyText>
            <MyText color={COLORS.lightGreen}>+ Add More</MyText>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 20,
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 1,
              shadowRadius: 3.05,
              elevation: 1,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              padding: 10,
              borderColor: COLORS.lightgrey,
              borderWidth: 1,
            }}>
            <Image
              source={Image1}
              style={{
                width: 50,
                height: 50,
                backgroundColor: COLORS.lightgrey,
                borderRadius: 50,
              }}
            />
            <View>
              <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.bold}>
                Keithan Lee
              </MyText>
              <MyText>BDE & BDM </MyText>
            </View>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: 'lightgrey',
                borderRadius: 20,
                position: 'absolute',
                top: 10,
                right: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="close" size={12} color={COLORS.black} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 20,
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 1,
              shadowRadius: 3.05,
              elevation: 1,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              padding: 10,
              borderColor: COLORS.lightgrey,
              borderWidth: 1,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: COLORS.lightgrey,
                borderRadius: 50,
              }}>
              <Image
                source={Image2}
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: COLORS.lightgrey,
                  borderRadius: 50,
                }}
              />
            </View>
            <View>
              <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.bold}>
                Keithan Lee
              </MyText>
              <MyText>BDE & BDM </MyText>
            </View>
            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: 'lightgrey',
                borderRadius: 20,
                position: 'absolute',
                top: 10,
                right: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="close" size={12} color={COLORS.black} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{padding: 10}}>
        <PrimaryBtn
          text="Done"
          onPress={() => {
            setIsModalVisible(true);
          }}
        />
      </View>
    </MainLayout>
  );
};

export default ScheduleInterviewScreen;
