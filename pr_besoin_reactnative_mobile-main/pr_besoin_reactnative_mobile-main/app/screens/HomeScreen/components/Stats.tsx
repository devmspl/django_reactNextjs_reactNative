import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MyText} from '../../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT, wp} from '../../../styles';

const data = [
  {id: 1, count: 36, title: 'Jobs Applied', color: '#EA9411'},
  {id: 2, count: 6, title: 'Interviews', color: '#1976D2'},
  {id: 3, count: 10, title: 'Saved Jobs', color: '#F24E1E'},
];
const Stats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <MyText size={FONT_SIZE.xl} bold={FONT_WEIGHT.semibold}>
          Stats
        </MyText>
      </View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={[
                styles.item,
                {
                  backgroundColor: item.color,
                },
              ]}>
              <MyText
                bold={FONT_WEIGHT.semibold}
                size={FONT_SIZE['1.5xl']}
                color={COLORS.white}>
                {item.count}
              </MyText>
              <MyText size={FONT_SIZE.sm} color={COLORS.white}>
                {item.title}
              </MyText>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {marginTop: 20},
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    padding: 15,
    marginRight: 10,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    marginVertical: 10,
    width: wp(28),
    gap: 10,
  },
});
