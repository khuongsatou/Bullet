import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';

class FCMService {
  messageListener = null;

  register = (onRegister, onNotification, onOpenNotification) => {
    this.checkPermission(onRegister);
    this.createNotificationListeners(
      onRegister,
      onNotification,
      onOpenNotification,
    );
  };

  registerAppWithFCM = async () => {
    if (Platform.OS === 'ios') {
      await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true);
    }
  };

  checkPermission = (onRegister) => {
    messaging()
      .hasPermission()
      .then((enabled) => {
        if (enabled) {
          // User has permissions
          this.getToken(onRegister);
        } else {
          // User doesn't have permission
          this.requestPermission(onRegister);
        }
      })
      .catch((error) => {
        console.log('[FCMService] Permission rejected ', error);
      });
  };

  getToken = (onRegister) => {
    messaging()
      .getToken()
      .then((fcmToken) => {
        if (fcmToken) {
          onRegister(fcmToken);
        } else {
          console.log('[FCMService] User does not have a device token');
        }
      })
      .catch((error) => {
        console.log('[FCMService] getToken rejected ', error);
      });
  };

  requestPermission = (onRegister) => {
    //Dùng cho IOS
    messaging()
      .requestPermission()
      .then(() => {
        this.getToken(onRegister);
      })
      .catch((error) => {
        console.log('[FCMService] Request Permission rejected ', error);
      });
  };

  deleteToken = () => {
    console.log('[FCMService] deleteToken ');
    messaging()
      .deleteToken()
      .catch((error) => {
        console.log('[FCMService] Delete token error ', error);
      });
  };

  createNotificationListeners = (
    onRegister,
    onNotification,
    onOpenNotification,
  ) => {
    // When the application is running, but in the background
    // Khi refresh nó sẽ vào đây.
    // Khi có thông báo và nhấn vào nó sẽ vào đây.
    // messaging().onNotificationOpenedApp(remoteMessage => {
    //   if (remoteMessage) {
    //     const notification = remoteMessage.notification;
    //     onOpenNotification(notification);
    //     console.log(
    //       '%cFCMService.js line:88 "object"',
    //       'color: #007acc;',
    //       'Nó chạy vô đây',
    //     );
    //     // this.removeDeliveredNotification(notification.notificationId)
    //   }
    // });

    // When the application is opened from a quit state.
    // Khi có thông báo nó sẽ vào đây.
    //  Khi refresh nó sẽ vào đây.
    // Khi nhấn vào 1 thông báo nó sẽ vào đây.
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          const notification = remoteMessage.notification;
          console.log(
            '%cFCMService.js line:104 "Nó chạy vô đây khi có data"',
            'color: #007acc;',
            'Nó chạy vô đây khi có data',
          );
          onOpenNotification(notification);
          //  this.removeDeliveredNotification(notification.notificationId)
        }
      });

    // Foreground state messages
    this.messageListener = messaging().onMessage(async (remoteMessage) => {
      console.log('[FCMService] A new FCM message arrived!', remoteMessage);
      if (remoteMessage) {
        let notification = null;
        if (Platform.OS === 'ios') {
          notification = remoteMessage.data.notification;
        } else {
          notification = remoteMessage.notification;
        }

        onNotification(notification);
      }
    });

    // Triggered when have new token
    messaging().onTokenRefresh((fcmToken) => {
      console.log('[FCMService] New token refresh: ', fcmToken);
      onRegister(fcmToken);
    });
  };

  unRegister = () => {
    this.messageListener();
  };
}

export const fcmService = new FCMService();
