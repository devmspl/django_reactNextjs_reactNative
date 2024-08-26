import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import InputWrapper from '../../components/inputs/InputWrapper';
import MyTextInput from '../../components/inputs/MyTextInput';
import PhoneInput from '../../components/inputs/PhoneInput';
import {MyText} from '../../components/MyText';
import PdfImage from '../../../assets/images/pdf.png';
import GearSvg from '../../../assets/icons/Gear.svg';
import {useNavigation} from '@react-navigation/native';
const ApplyJobScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout headerComp={<MainHeader title="Apply to Complex Studio" />}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <InputWrapper title="Name">
          <MyTextInput placeholder="Jessica Jung" />
        </InputWrapper>
        <InputWrapper title="Phone Number">
          <PhoneInput placeholder="12312312312" />
        </InputWrapper>
        <InputWrapper title="Email Address">
          <MyTextInput placeholder="jessica@gmail.com" />
        </InputWrapper>
        <InputWrapper title="Resume">
          <MyText style={styles.label} color={COLORS.grey} size={FONT_SIZE.sm}>
            Be Sure to include an updated resume
          </MyText>
          <TouchableOpacity style={styles.resumeBtn}>
            <View style={styles.resumeImageBox}>
              <Image source={PdfImage} style={styles.pdfStyle} />
            </View>
            <View>
              <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
                705 KB . Last used on 09/09/2013
              </MyText>
              <MyText bold={FONT_WEIGHT.semibold}>Jessica1.pdf</MyText>
            </View>
          </TouchableOpacity>
          <MyText style={styles.label2} color={COLORS.grey} size={FONT_SIZE.sm}>
            {'DOC, DOCX, PDF (2M)'}
          </MyText>
        </InputWrapper>
        <InputWrapper title="Upload Different Resume">
          <TouchableOpacity style={styles.uploadBtn}>
            <GearSvg />
            <MyText
              color={COLORS.lightGreen}
              size={FONT_SIZE.xl}
              bold={FONT_WEIGHT.semibold}>
              UPLOAD
            </MyText>
          </TouchableOpacity>
        </InputWrapper>
      </ScrollView>

      <View style={styles.btnContainer}>
        <PrimaryBtn
          containerStyle={[
            styles.btnStyle,
            {
              backgroundColor: COLORS.lightgrey,
            },
          ]}
          textStyle={{color: COLORS.black}}
          text="Cancel"
        />
        <PrimaryBtn
          containerStyle={styles.btnStyle}
          onPress={() => {
            // @ts-ignore
            navigation.navigate('ApplyComplete');
          }}
          text="Apply Now"
        />
      </View>
    </MainLayout>
  );
};

export default ApplyJobScreen;

const styles = StyleSheet.create({
  btnContainer: {
    padding: 20,
    flexDirection: 'row',
    gap: 20,
  },
  label: {marginLeft: 5},
  label2: {marginLeft: 5, marginBottom: 20, marginTop: -10},
  resumeBtn: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 10,
  },
  pdfStyle: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  resumeImageBox: {width: 40, height: 40},
  uploadBtn: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    gap: 10,
  },
  btnStyle: {flex: 1},
});
