/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';

const PrivacyPolicyScreen = () => {
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Privacy Policy" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 40}}>
        <View style={{marginTop: 10}}>
          <MyText color={COLORS.grey}>
            At Besoin, we are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy
            outlines how we collect, use, disclose, and protect the information
            we gather from users of our website and services.
          </MyText>
        </View>
        <View style={{marginTop: 10}}>
          <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
            Information We Collect
          </MyText>
          <MyText color={COLORS.grey}>
            Personal Information: When you register for an account on our
            platform, we may collect personal information such as your name,
            email address, phone number, and resume. Usage Data: We may also
            collect usage data, including your IP address, browser type, device
            information, and pages visited, to improve our services and user
            experience. Cookies: We use cookies and similar tracking
            technologies to enhance your browsing experience and personalize
            content based on your preferences.
          </MyText>
        </View>
        <View style={{marginTop: 10}}>
          <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
            How We Use Your Information
          </MyText>
          <MyText color={COLORS.grey}>
            To Provide Services: We use your personal information to create and
            manage your account, facilitate job searches and applications, and
            communicate with you about relevant opportunities.
          </MyText>
          <MyText color={COLORS.grey}>
            Analytics: We may analyze usage data to improve our website
            functionality, optimize user experience, and enhance our services.
          </MyText>
          <MyText color={COLORS.grey}>
            Marketing: With your consent, we may send you promotional emails or
            newsletters about job opportunities, events, or relevant services.
          </MyText>
        </View>
        <View style={{marginTop: 10}}>
          <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
            Disclosure of Information
          </MyText>
          <MyText color={COLORS.grey}>
            Third-Party Service Providers: We may share your information with
            third-party service providers who assist us in operating our
            website, conducting business, or providing services to you.
          </MyText>
          <MyText color={COLORS.grey}>
            Legal Compliance: We may disclose your information as required by
            law or in response to lawful requests from law enforcement agencies,
            regulatory authorities, or court orders
          </MyText>
        </View>
        <View style={{marginTop: 10}}>
          <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
            Data Security
          </MyText>
          <MyText color={COLORS.grey}>
            We implement reasonable security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. However, please note that no method of transmission
            over the internet or electronic
          </MyText>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default PrivacyPolicyScreen;
