/* eslint-disable react-native/no-inline-styles */
import {ScrollView} from 'react-native';
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import MainHeader from '../../components/layout/MainHeader';
import {MyText} from '../../components/MyText';
import {View} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';

const TermAndConditionScreen = () => {
  return (
    <MainLayout>
      <MainHeader leftArrowStyle={{left: 0}} title="Terms & Conditions" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 10}}>
          <MyText color={COLORS.grey}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            suscipit libero neque! Quis aliquid rem iusto, modi nesciunt nostrum
            voluptate voluptatibus dolorum natus accusantium, ea dignissimos
            porro commodi iure ipsum autem esse explicabo reiciendis labore
            assumenda eligendi vitae facilis architecto at? Officiis tempora
            quia dolorum aut, alias ab unde laudantium!
          </MyText>
          <MyText color={COLORS.grey}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            suscipit libero neque! Quis aliquid rem iusto, modi nesciunt nostrum
            voluptate voluptatibus dolorum natus accusantium, ea dignissimos
            porro commodi iure ipsum autem esse explicabo reiciendis labore
            assumenda eligendi vitae facilis architecto at? Officiis tempora
            quia dolorum aut, alias ab unde laudantium!
          </MyText>
        </View>
        <View style={{marginTop: 10}}>
          <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
            User Information
          </MyText>
          <MyText color={COLORS.grey}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            suscipit libero neque! Quis aliquid rem iusto, modi nesciunt nostrum
            voluptate voluptatibus dolorum natus accusantium, ea dignissimos
            porro commodi iure ipsum autem esse explicabo reiciendis labore
            assumenda eligendi vitae facilis architecto at? Officiis tempora
            quia dolorum aut, alias ab unde laudantium!
          </MyText>
        </View>
        <View style={{marginTop: 10}}>
          <MyText size={FONT_SIZE.l} bold={FONT_WEIGHT.semibold}>
            Cookies
          </MyText>
          <MyText color={COLORS.grey}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            suscipit libero neque! Quis aliquid rem iusto, modi nesciunt nostrum
            voluptate voluptatibus dolorum natus accusantium, ea dignissimos
            porro commodi iure ipsum autem esse explicabo reiciendis labore
            assumenda eligendi vitae facilis architecto at? Officiis tempora
            quia dolorum aut, alias ab unde laudantium!
          </MyText>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default TermAndConditionScreen;
