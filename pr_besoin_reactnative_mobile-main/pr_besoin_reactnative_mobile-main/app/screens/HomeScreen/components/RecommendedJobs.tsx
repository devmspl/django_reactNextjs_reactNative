import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {MyText} from '../../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT, wp} from '../../../styles';
import BookmarkWhite from '../../../../assets/icons/BookmarkWhite.svg';
import BookmarkBlack from '../../../../assets/icons/BookmarkBlack.svg';
import {useNavigation} from '@react-navigation/native';
const data = [
  {
    id: 1,
    title: 'UI/UX Designer',
    companyName: 'Company Name',
    image: require('../../../../assets/images/figma.png'),
    location: '7368 California, USA',
    salary: '$10k',
    tags: ['Full Time', 'Remote'],
  },
  {
    id: 2,
    title: 'Shoppify',
    image: require('../../../../assets/images/shopify.png'),
    companyName: 'Company Name',
    location: '7368 California, USA',
    salary: '$10k',
    tags: ['Full Time', 'Remote'],
  },
];

const RecommendedJobs = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <MyText size={FONT_SIZE.xl} bold={FONT_WEIGHT.semibold}>
          RecommendedJobs
        </MyText>
      </View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          const isActive = item.id === 1;
          return (
            <TouchableOpacity
              // @ts-ignore
              onPress={() => navigation.navigate('JobDetail')}
              style={[
                {
                  backgroundColor: isActive ? COLORS.lightGreen : COLORS.white,
                },
                styles.card,
              ]}>
              <View style={styles.cardRow1}>
                <View
                  style={[
                    styles.cardImageBox,
                    isActive ? {} : {backgroundColor: COLORS.lightgrey},
                  ]}>
                  <Image
                    source={item.image}
                    style={styles.cardImage}
                    resizeMode="contain"
                  />
                </View>
                <MyText
                  size={FONT_SIZE.lg}
                  color={isActive ? COLORS.white : COLORS.black}
                  bold={FONT_WEIGHT.bold}>
                  {item.title}
                </MyText>
              </View>
              <View style={styles.section2}>
                <View>
                  <MyText
                    color={isActive ? COLORS.white : COLORS.black}
                    size={FONT_SIZE.lg}
                    bold={FONT_WEIGHT.semibold}>
                    {item.companyName}
                  </MyText>
                  <MyText
                    color={isActive ? COLORS.white : COLORS.black}
                    size={FONT_SIZE.sm}>
                    {item.location}
                  </MyText>
                </View>
                <View style={styles.alignRow}>
                  <MyText
                    color={isActive ? COLORS.white : COLORS.black}
                    size={FONT_SIZE.lg}
                    bold={FONT_WEIGHT.semibold}>
                    {item.salary}
                  </MyText>
                  <MyText color={isActive ? COLORS.white : COLORS.black}>
                    /m
                  </MyText>
                </View>
              </View>
              <View style={styles.section3}>
                <View style={styles.tagBox}>
                  {item?.tags.map(t => {
                    return (
                      <View key={t} style={styles.tag}>
                        <MyText
                          size={FONT_SIZE.sm}
                          color={isActive ? COLORS.white : COLORS.black}>
                          {t}
                        </MyText>
                      </View>
                    );
                  })}
                </View>
                {isActive ? <BookmarkWhite /> : <BookmarkBlack />}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default RecommendedJobs;

const styles = StyleSheet.create({
  container: {marginTop: 20},
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    padding: 20,
    borderRadius: 15,
    marginRight: 10,
    width: wp(70),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginVertical: 20,
  },
  cardRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 25,
  },
  cardImageBox: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: 50,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardImage: {width: 30, height: 30},
  alignRow: {flexDirection: 'row', alignItems: 'center'},
  section3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  tag: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  tagBox: {flexDirection: 'row', gap: 10},
});
