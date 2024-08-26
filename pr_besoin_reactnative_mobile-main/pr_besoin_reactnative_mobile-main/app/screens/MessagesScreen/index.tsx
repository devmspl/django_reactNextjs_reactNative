import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    name: 'Sowkot',
    lastMessage: 'A wonderful serently has taken...',
    dateAndTime: '2 min',
    unReadCount: 1,
    url: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'Aminur',
    lastMessage: 'A wonderful serently has taken...',
    dateAndTime: '2 min',
    unReadCount: 0,
    url: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww',
  },
  {
    id: 3,
    name: 'Zubaier',
    lastMessage: 'A wonderful serently has taken...',
    dateAndTime: '2 min',
    unReadCount: 0,
    url: 'https://plus.unsplash.com/premium_photo-1673792686134-f8cbeb0ad3e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lsfGVufDB8fDB8fHww',
  },
  {
    id: 4,
    name: 'Kamrul',
    lastMessage: 'A wonderful serently has taken...',
    dateAndTime: '2 min',
    unReadCount: 0,
    url: 'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 5,
    name: 'Reazul',
    lastMessage: 'A wonderful serently has taken...',
    dateAndTime: '2 min',
    unReadCount: 0,
    url: 'https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
  },
];
const MessagesScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout
      headerComp={
        <MainHeader
          title="Message"
          nextComp={
            <View style={styles.headerSearch}>
              <EvilIcons name="search" size={30} />
            </View>
          }
        />
      }>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <React.Fragment>
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => {
                  //  @ts-ignore
                  navigation.navigate('ChatScreen');
                }}>
                <View style={styles.itemImageContainer}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{uri: item.url}}
                  />
                </View>
                <View style={styles.itemCenterContainer}>
                  <MyText
                    color={COLORS.black}
                    bold={FONT_WEIGHT.semibold}
                    size={FONT_SIZE.base}>
                    {item.name}
                  </MyText>
                  <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
                    {item.lastMessage}
                  </MyText>
                </View>
                <View style={styles.itemrightContainer}>
                  {item.unReadCount > 0 && (
                    <View style={styles.itemDot}>
                      <MyText color={COLORS.white} size={FONT_SIZE.sm}>
                        1
                      </MyText>
                    </View>
                  )}
                  <MyText color={COLORS.grey} size={FONT_SIZE.sm}>
                    2 min
                  </MyText>
                </View>
              </TouchableOpacity>
              <View style={styles.itemLine} />
            </React.Fragment>
          );
        }}
      />
    </MainLayout>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  headerSearch: {
    backgroundColor: COLORS.lightgrey,
    height: 45,
    width: 45,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    gap: 10,
  },
  itemLine: {
    flex: 1,
    height: 1,
    opacity: 0.4,
    backgroundColor: COLORS.grey,
  },
  itemImageContainer: {
    backgroundColor: COLORS.grey,
    width: 45,
    height: 45,
    borderRadius: 15,
    overflow: 'hidden',
  },
  itemCenterContainer: {
    flex: 1,
  },
  itemrightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemDot: {
    backgroundColor: COLORS.lightGreen,
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
