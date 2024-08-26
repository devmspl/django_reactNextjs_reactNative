import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MyText} from '../../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';

const data = [
  {id: 1, title: 'Senior Desginer'},
  {id: 2, title: 'Web Desginer'},
  {id: 3, title: 'Software Developer'},
  {id: 4, title: 'Marketing'},
];
const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <MyText size={FONT_SIZE.xl} bold={FONT_WEIGHT.semibold}>
          Categories
        </MyText>
        <MyText
          size={FONT_SIZE.base}
          bold={FONT_WEIGHT.semibold}
          color={COLORS.lightGreen}>
          Categories
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
              style={[
                styles.item,
                {
                  backgroundColor: isActive
                    ? COLORS.lightGreen
                    : COLORS.transparent,
                  borderColor: isActive ? COLORS.lightGreen : COLORS.grey,
                },
              ]}>
              <MyText color={isActive ? COLORS.white : COLORS.black}>
                {item.title}
              </MyText>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {marginTop: 20},
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    marginRight: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
  },
});
