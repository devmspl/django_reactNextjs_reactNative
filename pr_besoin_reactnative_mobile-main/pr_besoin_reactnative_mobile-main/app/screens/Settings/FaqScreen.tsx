/* eslint-disable react-native/no-inline-styles */
import {Pressable, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';

const data = [
  {
    title: 'How do I place an order on your website?',
    data: 'Ut faucibus vulputate mollis. Vivamus libero ipsum, mollis nec elit. Ut faucibus vulputate mollis Vivamus libero ipum, mollis nec elit.',
  },
  {
    title: 'How do I place an order on your website?',
    data: 'Ut faucibus vulputate mollis. Vivamus libero ipsum, mollis nec elit. Ut faucibus vulputate mollis Vivamus libero ipum, mollis nec elit.',
  },
  {
    title: 'How do I place an order on your website?',
    data: 'Ut faucibus vulputate mollis. Vivamus libero ipsum, mollis nec elit. Ut faucibus vulputate mollis Vivamus libero ipum, mollis nec elit.',
  },
];

const Item = ({title, content}: {title: string; content: string}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Pressable
      onPress={() => setIsOpen(!isOpen)}
      style={{
        borderBlockColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginBottom: 20,
      }}>
      <View style={{flexDirection: 'row', gap: 10, marginBottom: 10}}>
        <AntDesign
          name={'minuscircle'}
          size={20}
          color={isOpen ? COLORS.lightGreen : COLORS.black}
        />
        <MyText
          size={FONT_SIZE.l}
          bold={FONT_WEIGHT.semibold}
          color={isOpen ? COLORS.lightGreen : COLORS.black}>
          {title}
        </MyText>
      </View>
      {isOpen && <MyText>{content}</MyText>}
    </Pressable>
  );
};
const FaqScreen = () => {
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="FAQ" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 30}}>
          {data.map((item, index) => {
            return <Item key={index} title={item.title} content={item.data} />;
          })}
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default FaqScreen;
