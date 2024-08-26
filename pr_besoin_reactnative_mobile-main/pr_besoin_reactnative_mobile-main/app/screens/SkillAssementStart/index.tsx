/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT, hp, wp} from '../../styles';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';

const SkillAssementStart = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightGreen}}>
      <MainHeader title="Skill Assessment" titleColor={COLORS.white} />

      <View style={{paddingHorizontal: 20, gap: 15}}>
        <MyText
          size={FONT_SIZE.l}
          bold={FONT_WEIGHT.semibold}
          color={COLORS.white}>
          Question 8\15
        </MyText>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 0.7,
              height: 8,
              backgroundColor: 'orange',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              overflow: 'hidden',
            }}
          />
          <View
            style={{
              flex: 0.3,
              height: 8,
              backgroundColor: `rgba(0,0,0,0.3)`,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              overflow: 'hidden',
            }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            zIndex: -1,
            backgroundColor: 'rgba(224, 224, 224, 1)',
            width: wp(70),
            height: hp(70),
            borderRadius: 35,
            padding: 20,
            bottom: 35,
          }}
        />
        <View
          style={{
            position: 'absolute',
            zIndex: -2,
            backgroundColor: 'rgba(200, 200, 200, 1)',
            width: wp(60),
            height: hp(70),
            borderRadius: 35,
            padding: 20,
            bottom: 20,
          }}
        />
        <View
          style={{
            backgroundColor: COLORS.white,
            width: wp(80),
            height: hp(70),
            borderRadius: 35,
            padding: 20,
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: COLORS.grey,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              gap: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: COLORS.grey,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: COLORS.grey,
                  borderRadius: 20,
                }}
              />
            </View>
            <MyText>Almost Never</MyText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: COLORS.lightGreen,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              gap: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: COLORS.lightGreen,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: COLORS.lightGreen,
                  borderRadius: 20,
                }}
              />
            </View>
            <MyText>Sometimes</MyText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: COLORS.grey,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              gap: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: COLORS.grey,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: COLORS.grey,
                  borderRadius: 20,
                }}
              />
            </View>
            <MyText>Fairy Often</MyText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: COLORS.grey,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              gap: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: COLORS.grey,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: COLORS.grey,
                  borderRadius: 20,
                }}
              />
            </View>
            <MyText>Very Often</MyText>
          </TouchableOpacity>
          <PrimaryBtn text="Next" />
        </View>
      </View>
    </View>
  );
};

export default SkillAssementStart;

const styles = StyleSheet.create({});
