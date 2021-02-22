/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Alert} from 'react-native';

import Navigations from '@Navigations';
import Styles from '@Themes';
import {Provider} from 'react-redux';
import {store} from '@Redux/store';
import messaging from '@react-native-firebase/messaging';
import {fcmService} from '@Containers/fcm/FCMService';
import {useDispatch, useSelector} from 'react-redux';
import {action} from '@Redux/Genneric';
import * as Types from '@Redux/types';
// import {fcm} from '@Containers/fcm';
// import {localNotificationService} from '@Containers/fcm/LocalNotificationService';

const App: () => React$Node = () => {
  // React.useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={[Styles.vMarginStatusBar]} />
      <Navigations />
    </Provider>
  );
};

export default App;
