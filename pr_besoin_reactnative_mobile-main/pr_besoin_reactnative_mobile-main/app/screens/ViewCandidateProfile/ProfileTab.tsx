import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import Line from '../../components/Line';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ProfileTab = () => {
  return (
    <View style={{paddingVertical: 10}}>
      <View style={{marginTop: 5}}>
        <MyText
          size={FONT_SIZE.lg}
          bold={FONT_WEIGHT.bold}
          style={{marginBottom: 5}}
          color={COLORS.black}>
          About
        </MyText>
        <MyText color={COLORS.grey}>
          I know i can help your company create stunning visuals. As someone who
          has worked inb marketing and graphic design for over a decade, I know
          what brands need to capture their audience’ attention. With my pow...
          <MyText color={COLORS.lightGreen}>Read more</MyText>
        </MyText>

        <Line color="lightgray" containerStyle={{marginTop: 10}} />
      </View>

      <View style={{marginTop: 5}}>
        <MyText
          size={FONT_SIZE.lg}
          bold={FONT_WEIGHT.bold}
          style={{marginBottom: 5}}
          color={COLORS.black}>
          Contact
        </MyText>
        <View style={{marginBottom: 10, gap: 10}}>
          <View style={{gap: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="call" color={COLORS.lightGreen} size={15} />
            <MyText color={COLORS.black} bold={FONT_WEIGHT.bold}>
              01782-392382
            </MyText>
          </View>
          <View style={{gap: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name="mail" color={COLORS.lightGreen} size={15} />
            <MyText color={COLORS.black} bold={FONT_WEIGHT.bold}>
              jessicajung@gmail.com
            </MyText>
          </View>
          <View style={{gap: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="location-sharp"
              color={COLORS.lightGreen}
              size={15}
            />
            <MyText color={COLORS.black} bold={FONT_WEIGHT.bold}>
              111 California, USA
            </MyText>
          </View>
        </View>
      </View>

      <View style={{marginTop: 5}}>
        <MyText
          size={FONT_SIZE.lg}
          bold={FONT_WEIGHT.bold}
          style={{marginBottom: 5}}
          color={COLORS.black}>
          Experience
        </MyText>
        <View style={{marginLeft: 20, marginBottom: 10}}>
          <MyText color={COLORS.black} bold={FONT_WEIGHT.bold}>
            Senior Graphic Designer
          </MyText>
          <MyText color={COLORS.grey}>Complex Studio . Full Time</MyText>
          <MyText color={COLORS.grey}>
            March 2022 - Present . 1 yr 7 months
          </MyText>

          <Line color="lightgray" containerStyle={{marginTop: 10}} />
        </View>
        <View style={{marginLeft: 20, marginBottom: 10}}>
          <MyText color={COLORS.black} bold={FONT_WEIGHT.bold}>
            Senior Graphic Designer
          </MyText>
          <MyText color={COLORS.grey}>Complex Studio . Full Time</MyText>
          <MyText color={COLORS.grey}>
            March 2022 - Present . 1 yr 7 months
          </MyText>

          <Line color="lightgray" containerStyle={{marginTop: 10}} />
        </View>
      </View>
      <View style={{marginTop: 5}}>
        <MyText
          size={FONT_SIZE.lg}
          bold={FONT_WEIGHT.bold}
          style={{marginBottom: 5}}
          color={COLORS.black}>
          Education
        </MyText>
        <View style={{marginLeft: 20, marginBottom: 10}}>
          <MyText color={COLORS.black} bold={FONT_WEIGHT.bold}>
            CGK Group of Institutes
          </MyText>
          <MyText color={COLORS.grey}>
            Bechlors of Technology - BTech computer Science Engineering
          </MyText>
          <MyText color={COLORS.grey}>June 2013 - May 2017</MyText>
          <Line color="lightgray" containerStyle={{marginTop: 10}} />
        </View>
      </View>
      <View style={{marginTop: 5}}>
        <MyText
          size={FONT_SIZE.lg}
          bold={FONT_WEIGHT.bold}
          style={{marginBottom: 5}}
          color={COLORS.black}>
          Skill
        </MyText>
        <View
          style={{
            marginBottom: 10,
            gap: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {[
            'Problem Solving',
            'Technical Skills',
            'IOS',
            'Desgin',
            'Mobile',
            'Android',
          ].map(i => {
            return (
              <View
                key={i}
                style={{
                  borderRadius: 10,
                  borderColor: COLORS.lightGreen,
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}>
                <MyText color={COLORS.lightGreen}>{i}</MyText>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({});
