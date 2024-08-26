import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {MyText} from '../../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import BookmarkFill from '../../../../assets/icons/BookmarkGreen.svg';
import BookmarkBlack from '../../../../assets/icons/BookmarkBlack.svg';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const data = [
  {
    id: 1,
    title: 'Software Engineer',
    companyName: 'Complex Studio',
    image: require('../../../../assets/images/google.png'),
    location: '349 Irvine, CA',
    date: '2 months ago',
    marked: false,
  },
  {
    id: 2,
    title: 'Product Desgin',
    companyName: 'Complex Studio',
    image: require('../../../../assets/images/dribble.png'),
    location: '349 Irvine, CA',
    date: '2 months ago',
    marked: true,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    companyName: 'Complex Studio',
    image: require('../../../../assets/images/figma.png'),
    location: '349 Irvine, CA',
    date: '2 months ago',
    marked: true,
  },
];

const RecentJobPosts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <MyText size={FONT_SIZE.xl} bold={FONT_WEIGHT.semibold}>
          RecentJobPosts
        </MyText>
      </View>
      <FlatList
        scrollEnabled={false}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={styles.itemSection1}>
                <MyText
                  color={COLORS.black}
                  size={FONT_SIZE.xl}
                  bold={FONT_WEIGHT.semibold}>
                  {item.title}
                </MyText>
                <View style={styles.itemSection2}>
                  <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                    {item.companyName}
                  </MyText>
                  <EvilIcons
                    name="location"
                    color={COLORS.lightGreen}
                    size={18}
                  />
                  <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                    {item.location}
                  </MyText>
                </View>
                <MyText size={FONT_SIZE.sm} color={COLORS.grey}>
                  {item.date}
                </MyText>
              </View>
              {item?.marked ? <BookmarkFill /> : <BookmarkBlack />}
            </View>
          );
        }}
      />
    </View>
  );
};

export default RecentJobPosts;

const styles = StyleSheet.create({
  container: {marginTop: 20},
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  // item
  item: {
    backgroundColor: COLORS.lightgrey,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBox: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 15,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 20, height: 20},
  itemSection1: {flex: 1, paddingHorizontal: 20, gap: 5},
  itemSection2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
});
