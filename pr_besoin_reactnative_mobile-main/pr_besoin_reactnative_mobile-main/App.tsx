import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './app/naviagtion/RootStack';
import './app/sheets/sheets';
import {SheetProvider} from 'react-native-actions-sheet';
import {Provider} from 'react-redux';
import store from './app/redux/store';
const LoadApp = () => {
  return <RootStack />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SheetProvider>
          <LoadApp />
        </SheetProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
