/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../naviagtion/types';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const SubscriptionScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const {APP_MODE} = useSelector((s: RootState) => s.app);
  const isCompanyMode = APP_MODE === 'Company';
  const renderCardOne = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
        <LinearGradient
          style={styles.cardWrapper}
          colors={['#000000', '#888']}
          start={{x: 1, y: 0.6}}
          end={{x: 0, y: 1}}>
          <MyText
            color={COLORS.white}
            size={FONT_SIZE.xl}
            bold={FONT_WEIGHT.semibold}>
            Free
          </MyText>
          {isCompanyMode ? (
            <React.Fragment>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Post only 3 job /month</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="cross" size={20} />
                <MyText color={COLORS.white}>
                  Candidate Matching Algorithms
                </MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="cross" size={20} />
                <MyText color={COLORS.white}>Custom Branding</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="cross" size={20} />
                <MyText color={COLORS.white}>Priority Support</MyText>
              </View>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Apply only 3 job per week</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="cross" size={20} />
                <MyText color={COLORS.white}>Job Matching Algorithms</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="cross" size={20} />
                <MyText color={COLORS.white}>Custom Branding</MyText>
              </View>
            </React.Fragment>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const renderCardTwo = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
        <LinearGradient
          style={styles.cardWrapper}
          colors={['#A24B99', '#113CFE']}
          start={{x: 1, y: 0.6}}
          end={{x: 0, y: 1}}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <MyText
              color={COLORS.white}
              size={FONT_SIZE.xl}
              bold={FONT_WEIGHT.semibold}>
              Premium Subscription
            </MyText>
            <MyText
              color={COLORS.white}
              size={FONT_SIZE.xl}
              bold={FONT_WEIGHT.semibold}>
              $40/mo
            </MyText>
          </View>
          {isCompanyMode ? (
            <React.Fragment>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>
                  Candidate Matching Algorithms
                </MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Custom Branding</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Priority Support</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Dedicated Account Manager</MyText>
              </View>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>
                  Unlimited monthly application
                </MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Upload up to 5 resumnes</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Track application status</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Weekly job recommendations</MyText>
              </View>
            </React.Fragment>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const renderCardThree = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
        <LinearGradient
          style={styles.cardWrapper}
          colors={['#FE8F65', '#FC4762']}
          start={{x: 1, y: 0.6}}
          end={{x: 0, y: 1}}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <MyText
              color={COLORS.white}
              size={FONT_SIZE.xl}
              bold={FONT_WEIGHT.semibold}>
              Advanced Subscription
            </MyText>
            <MyText
              color={COLORS.white}
              size={FONT_SIZE.xl}
              bold={FONT_WEIGHT.semibold}>
              $50/mo
            </MyText>
          </View>
          {isCompanyMode ? (
            <React.Fragment>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>
                  Candidate Matching Algorithms
                </MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Custom Branding</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Priority Support</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Dedicated Account Manager</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Background Checks</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Job Ad Boosts</MyText>
              </View>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>
                  Unlimited monthly application
                </MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Upload up to 5 resumnes</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Track application status</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Weekly job recommendations</MyText>
              </View>
              <View style={styles.row}>
                <Entypo color={COLORS.white} name="check" size={15} />
                <MyText color={COLORS.white}>Matching Algorithm</MyText>
              </View>
            </React.Fragment>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Subscription Plan" />
      <ScrollView
        contentContainerStyle={{paddingBottom: 50}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <MyText size={FONT_SIZE.xl} bold={FONT_WEIGHT.semibold}>
          Current Plan
        </MyText>
        <View style={{gap: 20, marginTop: 20}}>
          <MyText
            color={COLORS.black}
            bold={FONT_WEIGHT.semibold}
            size={FONT_SIZE.l}>
            Free
          </MyText>
          {renderCardOne()}
          <View>
            <MyText
              color={COLORS.black}
              bold={FONT_WEIGHT.semibold}
              size={FONT_SIZE.l}>
              Change Your Plan
            </MyText>
          </View>
          {renderCardTwo()}
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <View
              style={{
                flex: 1,
                height: 2,
                backgroundColor: COLORS.grey,
              }}
            />
            <MyText color={COLORS.black} size={FONT_SIZE.l}>
              OR
            </MyText>
            <View
              style={{
                flex: 1,
                height: 2,
                backgroundColor: COLORS.grey,
              }}
            />
          </View>
          {renderCardThree()}
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    backgroundColor: COLORS.black,
    borderRadius: 10,
    padding: 20,
    paddingBottom: 30,
  },
  row: {
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
