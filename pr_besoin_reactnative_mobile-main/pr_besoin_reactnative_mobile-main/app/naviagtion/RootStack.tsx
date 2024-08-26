import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import WelcomeScreen from '../screens/WelcomScreen';
import LoginRegisterScreen from '../screens/auth/LoginRegisterScreen';
import ForgetPasswordPhone from '../screens/auth/ForgetPasswordPhone';
import ForgetPasswordPhoneOtpVerify from '../screens/auth/ForgetPasswordPhoneOtpVerify';
import ResetPassword from '../screens/auth/ResetPassword';
import MainTab from './MainTab';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import FilterScreen from '../screens/FilterScreen';
import JobDetailScreen from '../screens/JobDetailScreen';
import ApplyJobScreen from '../screens/ApplyJobScreen';
import ApplyCompleteScreen from '../screens/ApplyCompleteScreen';
import AppliedJobDetailScreen from '../screens/AppliedJobDetailScreen';
import CompletedJobDetailScreen from '../screens/CompletedJobDetail';
import ChatScreen from '../screens/ChatScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import UploadCVScreen from '../screens/UploadCVScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import LogoutScreen from '../screens/LogoutScreen';
import SkillAssessment from '../screens/SkillAssessment';
import SkillAssessmentDetailScreen from '../screens/SkillAssessmentDetail';
import SkillAssementStart from '../screens/SkillAssementStart';
import {RootStackParams} from './types';
import CreateResumeScreen from '../screens/CreateResumeScreen';
import ProgressStart from '../screens/CreateResumeScreen/ProgressStart';
import ProgressPersonalDetail from '../screens/CreateResumeScreen/ProgressPersonalDetail';
import ProgressExperience from '../screens/CreateResumeScreen/ProgressExerience';
import ProgressAccadmicQualification from '../screens/CreateResumeScreen/ProgressAccadmicQualification';
import ProgressLocation from '../screens/CreateResumeScreen/ProgressLocation';
import ProgressSkill from '../screens/CreateResumeScreen/ProgressSkills';
import ProgressLanguage from '../screens/CreateResumeScreen/ProgressLanguage';
import ProgressCertificates from '../screens/CreateResumeScreen/ProgressCertificates';
import ProgressAwards from '../screens/CreateResumeScreen/ProgressAwards';
import ProgressLinks from '../screens/CreateResumeScreen/ProgressLinks';
import ProgressInterest from '../screens/CreateResumeScreen/ProgressInterest';
import AddNewCardScreen from '../screens/Subscription/AddNewCardScreen';
import BankDetailScreen from '../screens/Subscription/BankDetailScreen';
import PaymentScreen from '../screens/Subscription/PaymentScreen';
import PaymentPinEnterScreen from '../screens/Subscription/PaymentPInEnterScreen';
import PaymentSuccessScreen from '../screens/Subscription/PaymentSucessScreen';
import SubscriptionScreen from '../screens/Subscription/SubscriptionScreen';
import SettingScreen from '../screens/Settings/SettingScreen';
import CareerScreen from '../screens/Settings/CareerTipsScreen';
import FaqScreen from '../screens/Settings/FaqScreen';
import LanguageScreen from '../screens/Settings/LanguageScreen';
import PrivacyPolicyScreen from '../screens/Settings/PrivacyPolicyScreen';
import TermAndConditionScreen from '../screens/Settings/TermAndConditionScreen';
import ReferAndEarnScreen from '../screens/Settings/ReferAndEarnScreen';
import ResumeCreatedDone from '../screens/CreateResumeScreen/ResumeCreatedDone';
import ResumeView from '../screens/CreateResumeScreen/ResumeView';
import PersonalInfoCompanyScreen from '../screens/PersonalInfoCompanyScreen';
import JobAppliesScreen from '../screens/JobApplies';
import SeeResumeFileScreen from '../screens/SeeResumeFile';
import CandidateApplicationScreen from '../screens/CandidateApplication';
import ScheduleInterviewScreen from '../screens/ScheduleInterview';
import CompanyEditProfileScreen from '../screens/CompanyEditProfile';
import JobDescriptionScreen from '../screens/JobDescriptionScreen';
import ManageJobsScreen from '../screens/ManageJobs';
import JobPostScreen from '../screens/JobPost';
import JobPostConfirmScreen from '../screens/JobPostConfirm';
import SearchCandidateResultScreen from '../screens/SearchCandidateResult';
import SearchCandidateScreen from '../screens/SearchCandidate';
import SearchSkillScreen from '../screens/SearchSkill';
import ViewCandidateProfileScreen from '../screens/ViewCandidateProfile';
const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
  const [splashEnable, setSplashEnable] = useState(true);
  if (splashEnable) {
    return <SplashScreen onEnd={() => setSplashEnable(false)} />;
  }
  return (
    <Stack.Navigator
      // initialRouteName="MainTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="LoginRegister" component={LoginRegisterScreen} />
      <Stack.Screen
        name="ForgetPasswordPhone"
        component={ForgetPasswordPhone}
      />
      <Stack.Screen
        name="ForgetPasswordPhoneOtpVerify"
        component={ForgetPasswordPhoneOtpVerify}
      />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen
        name="PersonalInfoCompany"
        component={PersonalInfoCompanyScreen}
      />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="JobDetail" component={JobDetailScreen} />
      <Stack.Screen name="ApplyJob" component={ApplyJobScreen} />
      <Stack.Screen name="JobApplies" component={JobAppliesScreen} />
      <Stack.Screen name="ApplyComplete" component={ApplyCompleteScreen} />
      <Stack.Screen
        name="AppliedJobDetail"
        component={AppliedJobDetailScreen}
      />
      <Stack.Screen
        name="CompletedJobDetail"
        component={CompletedJobDetailScreen}
      />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="CreateResumeScreen" component={CreateResumeScreen} />
      <Stack.Screen name="ProgressStartScreen" component={ProgressStart} />
      <Stack.Screen
        name="ProgressExperienceScreen"
        component={ProgressExperience}
      />
      <Stack.Screen
        name="ProgressAccadmicQualificationScreen"
        component={ProgressAccadmicQualification}
      />
      <Stack.Screen
        name="ProgressLocationScreen"
        component={ProgressLocation}
      />
      <Stack.Screen name="ProgressSkillScreen" component={ProgressSkill} />
      <Stack.Screen
        name="ProgressLanguageScreen"
        component={ProgressLanguage}
      />
      <Stack.Screen
        name="ProgressCertificatesScreen"
        component={ProgressCertificates}
      />
      <Stack.Screen name="ProgressAwardsScreen" component={ProgressAwards} />
      <Stack.Screen name="ProgressLinksScreen" component={ProgressLinks} />
      <Stack.Screen
        name="ProgressInterestScreen"
        component={ProgressInterest}
      />
      <Stack.Screen
        name="ProgressPersonalDetailScreen"
        component={ProgressPersonalDetail}
      />
      <Stack.Screen name="UploadCVScreen" component={UploadCVScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="Bookmark" component={BookmarkScreen} />
      <Stack.Screen name="Logout" component={LogoutScreen} />
      <Stack.Screen name="SkillAssessment" component={SkillAssessment} />
      <Stack.Screen
        name="SkillAssessmentDetail"
        component={SkillAssessmentDetailScreen}
      />
      <Stack.Screen name="SkillAssementStart" component={SkillAssementStart} />
      <Stack.Screen name="AddNewCard" component={AddNewCardScreen} />
      <Stack.Screen name="BankDetail" component={BankDetailScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="PaymentPinEnter" component={PaymentPinEnterScreen} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
      <Stack.Screen name="Subscription" component={SubscriptionScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="CarrerTips" component={CareerScreen} />
      <Stack.Screen name="Faq" component={FaqScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen
        name="TermAndCondition"
        component={TermAndConditionScreen}
      />
      <Stack.Screen name="ReferAndEarn" component={ReferAndEarnScreen} />
      <Stack.Screen name="ResumeCreatedDone" component={ResumeCreatedDone} />
      <Stack.Screen name="ResumeView" component={ResumeView} />
      <Stack.Screen name="SeeResumeFile" component={SeeResumeFileScreen} />
      <Stack.Screen
        name="CandidateApplication"
        component={CandidateApplicationScreen}
      />
      <Stack.Screen
        name="ScheduleInterview"
        component={ScheduleInterviewScreen}
      />
      <Stack.Screen
        name="CompanyEditProfile"
        component={CompanyEditProfileScreen}
      />
      <Stack.Screen name="JobDescription" component={JobDescriptionScreen} />
      <Stack.Screen name="ManageJobs" component={ManageJobsScreen} />
      <Stack.Screen name="JobPost" component={JobPostScreen} />
      <Stack.Screen name="JobPostConfirm" component={JobPostConfirmScreen} />
      <Stack.Screen name="SearchCandidate" component={SearchCandidateScreen} />
      <Stack.Screen
        name="SearchCandidateResult"
        component={SearchCandidateResultScreen}
      />
      <Stack.Screen name="SearchSkill" component={SearchSkillScreen} />
      <Stack.Screen
        name="ViewCandidateProfile"
        component={ViewCandidateProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
