/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import Navigations from '@Navigations';
import Styles from '@Themes';
import {Provider} from 'react-redux';
import {store} from '@Redux/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={[Styles.vMarginStatusBar]} />
      <Navigations />
    </Provider>
  );
};

export default App;
