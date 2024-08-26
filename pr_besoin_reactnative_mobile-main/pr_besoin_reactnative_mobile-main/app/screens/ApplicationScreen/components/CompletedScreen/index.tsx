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
    status: 'Completed',
    image: require('../../../../../assets/images/animater.png'),
  },
  {
    id: 2,
    title: 'UI/UX Desginer',
    companyName: 'Complex Studio',
    location: '349 Irvine, CA',
    status: 'Completed',
    image: require('../../../../../assets/images/uiux.png'),
  },
];

const CompletedScreen = () => {
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
              navigation.navigate('CompletedJobDetail');
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
                  item.status === 'Completed' ? STATUS_COLOR.green : 'grey'
                }
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default CompletedScreen;

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
