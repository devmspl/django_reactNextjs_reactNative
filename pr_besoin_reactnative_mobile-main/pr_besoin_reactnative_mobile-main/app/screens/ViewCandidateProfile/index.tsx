import {Image, Pressable, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import ProfileTab from './ProfileTab';
import ResumeTab from './ResumeTab';
import ProfileImage from '../../../assets/images/avatar.png';

const ViewCandidateProfileScreen = () => {
  const [tab, setTab] = useState(1);
  return (
    <MainLayout>
      <MainHeader title="Candidate Profile" leftArrowStyle={{left: 0}} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 10,
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: COLORS.lightgrey,
              borderRadius: 60,
            }}>
            <Image
              source={ProfileImage}
              style={{
                width: 60,
                height: 60,
                backgroundColor: COLORS.lightgrey,
                borderRadius: 60,
              }}
            />
          </View>
          <View>
            <MyText
              color={COLORS.black}
              bold={FONT_WEIGHT.bold}
              size={FONT_SIZE.xl}>
              Jessica Jung
            </MyText>
            <MyText color={COLORS.grey}>Graphic Designer</MyText>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 10, gap: 10}}>
          <View
            style={{
              backgroundColor: 'rgba(79, 170, 137, 0.2)',
              paddingHorizontal: 5,
              paddingVertical: 2,
              borderRadius: 4,
              flexDirection: 'row',
              gap: 5,
            }}>
            <FontAwesome
              name="graduation-cap"
              size={15}
              color={COLORS.lightGreen}
            />
            <MyText color={COLORS.lightGreen} size={FONT_SIZE.sm}>
              Bachlors
            </MyText>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(79, 170, 137, 0.2)',
              paddingHorizontal: 5,
              paddingVertical: 2,
              borderRadius: 4,
              flexDirection: 'row',
              gap: 5,
            }}>
            <Entypo name="briefcase" size={15} color={COLORS.lightGreen} />
            <MyText color={COLORS.lightGreen} size={FONT_SIZE.sm}>
              1-3 Years
            </MyText>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(79, 170, 137, 0.2)',
              paddingHorizontal: 5,
              paddingVertical: 2,
              borderRadius: 4,
              alignSelf: 'flex-start',
              flexDirection: 'row',
              gap: 5,
            }}>
            <FontAwesome name="money" size={15} color={COLORS.lightGreen} />
            <MyText color={COLORS.lightGreen} size={FONT_SIZE.sm}>
              $90-$120
            </MyText>
          </View>
        </View>
        <Pressable
          style={{
            width: '100%',
            borderRadius: 10,
            height: 45,
            backgroundColor: COLORS.lightGreen,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MyText color={COLORS.white} bold={FONT_WEIGHT.bold}>
            Message
          </MyText>
        </Pressable>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Pressable
            onPress={() => setTab(1)}
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: tab === 1 ? COLORS.lightGreen : 'lightgrey',
                borderBottomWidth: 1.5,
              }}>
              <MyText
                bold={FONT_WEIGHT.semibold}
                color={tab === 1 ? COLORS.lightGreen : COLORS.black}>
                Profile
              </MyText>
            </View>
          </Pressable>
          <Pressable
            style={{flex: 1, alignItems: 'center'}}
            onPress={() => setTab(2)}>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: tab === 2 ? COLORS.lightGreen : 'lightgrey',
                borderBottomWidth: 1.5,
              }}>
              <MyText
                bold={FONT_WEIGHT.semibold}
                color={tab === 2 ? COLORS.lightGreen : COLORS.black}>
                Resume
              </MyText>
            </View>
          </Pressable>
        </View>

        {tab === 1 && <ProfileTab />}
        {tab === 2 && <ResumeTab />}
      </ScrollView>
    </MainLayout>
  );
};

export default ViewCandidateProfileScreen;
