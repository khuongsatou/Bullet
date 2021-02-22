import React from 'react';
import {Alert} from 'react-native';
import AnimatedStatusBar from '@Animations/AnimationStatusBar';
import Home from '@Containers/home';
import Login from '@Containers/login';
import Detail from '@Containers/home/Detail';

import {fcmService} from '@Containers/fcm/FCMService';
import {useDispatch, useSelector} from 'react-redux';
import {action} from '@Redux/Genneric';
import * as Types from '@Redux/types';
export default () => {
  const routeName = useSelector((state) => state.navigation.routeName);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log('start!');
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    // localNotificationService.configure(onOpenNotification);

    function onRegister(token) {
      console.log('3');
      console.log('[App] onRegister(Token): ', token);
    }

    // Bên trong App
    function onNotification(data) {
      console.log('Lắng nghe notification khi đang bật app');
      console.log('[App] onNotification: ', data);
      if (data.title) {
        // Alert.alert(data.title);
        console.log('%cindex.js line:32 object', 'color: #007acc;', data.title);
        dispatch(
          action(Types.getTypesUpdate('CHANGE_STATUSBAR'), {
            barStyle: 'light-content',
            backgroundColor: '#6300ee',
          }),
        );

        dispatch(
          action(Types.getTypesUpdate('NAVIGATE'), {
            routeName: 'Detail',
          }),
        );
        dispatch(
          action(Types.getTypesSucess('DETAIL'), {
            title: data.title,
            description: data.body,
          }),
        );
      } else {
        // Alert.alert('Chưa có data');
      }
    }

    // Bên ngoài App
    function onOpenNotification(data) {
      console.log('Lấy giá trị');
      console.log('[App] onOpenNotification: ', data);
      if (data.title) {
        console.log('%cindex.js line:55 data', 'color: #007acc;', data);
        // switch (data.title) {
        //   case 'item 1':

        //     break;
        // }
        dispatch(
          action(Types.getTypesUpdate('CHANGE_STATUSBAR'), {
            barStyle: 'light-content',
            backgroundColor: '#6300ee',
          }),
        );

        dispatch(
          action(Types.getTypesUpdate('NAVIGATE'), {
            routeName: 'Detail',
          }),
        );
        dispatch(
          action(Types.getTypesSucess('DETAIL'), {
            title: data.title,
            description: data.body,
          }),
        );
        // Alert.alert(data.title);
      } else {
        // Alert.alert('Chưa có data');
      }

      // alert('Open Notification: ' + notify.body);
    }

    return () => {
      console.log('Thoát app');
      console.log('[App] unRegister');
      fcmService.unRegister();
      // localNotificationService.unregister();
    };
  }, []);

  const renderRoute = () => {
    switch (routeName) {
      case 'Home':
        return <Home />;
      case 'Detail':
        return <Detail />;
    }
    return <Login />;
  };

  return (
    <>
      <AnimatedStatusBar />
      {renderRoute()}
    </>
  );
};
