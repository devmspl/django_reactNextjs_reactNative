/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {COLORS, DW, FONT_SIZE, FONT_WEIGHT, hp} from '../../styles';
import OneSvg from '../../../assets/illustration/one.svg';
import TwoSvg from '../../../assets/illustration/two.svg';
import VectorBottom from '../../../assets/svg/VectorBottom.svg';
import {MyText} from '../../components/MyText';
import NextBtn from '../../components/NextBtn';
import {useNavigation} from '@react-navigation/native';

const Dots = ({activeDot}: {activeDot: number}) => {
  return (
    <View style={{flexDirection: 'row', gap: 10}}>
      {[0, 1].map((_, index) => {
        return (
          <View
            key={_}
            style={{
              width: 10,
              height: 10,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              opacity: activeDot === index ? 1 : 0.4,
            }}
          />
        );
      })}
    </View>
  );
};

const StepOne = ({onNextPress}: {onNextPress: () => void}) => {
  return (
    <View style={{flex: 1, width: DW}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <OneSvg />
      </View>
      <View
        style={{
          height: hp(45),
          width: '100%',
          backgroundColor: '#4FAA89',
          borderTopRightRadius: 60,
          borderTopLeftRadius: 60,
          alignItems: 'center',
          paddingVertical: 20,
          gap: 20,
        }}>
        <MyText
          style={{maxWidth: 200}}
          center
          bold={FONT_WEIGHT.semibold}
          color={COLORS.white}
          size={FONT_SIZE['1.5xl']}>
          Make your dream career with Job
        </MyText>
        <MyText
          style={{maxWidth: 300}}
          center
          color={COLORS.white}
          size={FONT_SIZE.base}>
          Create a unique emotional story that describes better than words
        </MyText>
        <Dots activeDot={0} />
        <View style={{position: 'absolute', bottom: 80, zIndex: 1, right: 40}}>
          <NextBtn onPress={onNextPress} />
        </View>
        <VectorBottom style={{position: 'absolute', bottom: 20}} />
      </View>
    </View>
  );
};
const StepTwo = ({onNextPress}: {onNextPress: () => void}) => {
  return (
    <View style={{flex: 1, width: DW}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <TwoSvg />
      </View>
      <View
        style={{
          height: hp(45),
          width: '100%',
          backgroundColor: '#4FAA89',
          borderTopRightRadius: 60,
          borderTopLeftRadius: 60,
          // justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
          gap: 20,
        }}>
        <MyText
          style={{maxWidth: 230}}
          center
          bold={FONT_WEIGHT.semibold}
          color={COLORS.white}
          size={FONT_SIZE['1.5xl']}>
          Make interview process more easier
        </MyText>
        <MyText
          style={{maxWidth: 300}}
          center
          color={COLORS.white}
          size={FONT_SIZE.base}>
          Create a unique emotional story that describes better than words
        </MyText>
        <Dots activeDot={1} />
        <View style={{position: 'absolute', bottom: 80, zIndex: 1, right: 40}}>
          <NextBtn onPress={onNextPress} />
        </View>
        <VectorBottom style={{position: 'absolute', bottom: 20}} />
      </View>
    </View>
  );
};
const OnBoardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<any>();
  const navigation = useNavigation();
  const handleScollToIndex = (index: number) => {
    if (flatListRef.current != null) {
      flatListRef?.current?.scrollToIndex({animated: true, index});
    }
  };
  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.abs(Math.round(index));
      setActiveIndex(roundIndex);
    },
    [],
  );

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => handleScollToIndex(1)}
        style={{position: 'absolute', top: 20, right: 30, zIndex: 10}}>
        <MyText>Skip</MyText>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={[0, 1]}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item}) => {
          if (item === 0) {
            return (
              <StepOne
                onNextPress={() => handleScollToIndex(activeIndex + 1)}
              />
            );
          }
          if (item === 1) {
            return (
              <StepTwo
                onNextPress={() => {
                  // @ts-ignore
                  navigation.navigate('Welcome');
                }}
              />
            );
          }
          return <></>;
        }}
      />
    </View>
  );
};

export default OnBoardingScreen;
