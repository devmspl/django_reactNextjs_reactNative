import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {MyText} from '../../../../components/MyText';
import {FONT_SIZE, FONT_WEIGHT} from '../../../../styles';
import Status, {STATUS_COLOR} from '../../../../components/Status';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    title: '3D Animator',
    companyName: 'Complex Studio',
    location: '349 Irvine, CA',
    status: 'Approved',
    image: require('../../../../../assets/images/animater.png'),
  },
  {
    id: 2,
    title: 'UI/UX Desginer',
    companyName: 'Complex Studio',
    location: '349 Irvine, CA',
    status: 'Application Reviewed',
    image: require('../../../../../assets/images/uiux.png'),
  },
  {
    id: 3,
    title: 'Product Desginer',
    companyName: 'Complex Studio',
    location: '349 Irvine, CA',
    status: 'Pending',
    image: require('../../../../../assets/images/product-designer.png'),
  },
  {
    id: 4,
    title: 'Graphic Desginer',
    companyName: 'Complex Studio',
    location: '349 Irvine, CA',
    status: 'Closed',
    image: require('../../../../../assets/images/graphc-designer.png'),
  },
];

const AppliedScreen = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              // @ts-ignore
              navigation.navigate('AppliedJobDetail');
            }}>
            <View style={styles.imageBox}>
              <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.rightContainer}>
              <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE.base}>
                {item.title}
              </MyText>
              <View style={styles.locationView}>
                <MyText size={FONT_SIZE.sm}>{item.companyName}</MyText>
                <MyText size={FONT_SIZE.sm}>{item.location}</MyText>
              </View>
              <Status
                status={item.status}
                color={
                  item.status === 'Approved'
                    ? STATUS_COLOR.green
                    : item.status === 'Application Reviewed'
                    ? STATUS_COLOR.yellow
                    : item.status === 'Pending'
                    ? STATUS_COLOR.blue
                    : item.status === 'Closed'
                    ? STATUS_COLOR.red
                    : 'grey'
                }
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default AppliedScreen;

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  imageBox: {
    backgroundColor: 'rgba(79, 170, 137, 0.10)',
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  rightContainer: {
    gap: 10,
    marginLeft: 20,
  },
  locationView: {
    flexDirection: 'row',
    gap: 10,
  },
});
