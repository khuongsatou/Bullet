import AsyncStorage from '@react-native-community/async-storage';
import {useNetInfo} from '@react-native-community/netinfo';
import Setting from '@Configs/Settings';
import Toast from 'react-native-toast-message';
import RNConvertPhAsset from 'react-native-convert-ph-asset';
import RNFS from 'react-native-fs';
import {
  Platform,
  PermissionsAndroid,
  Alert,
  Linking,
  StatusBar,
} from 'react-native';

import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  requestMultiple,
} from 'react-native-permissions';
import {action} from '@Redux/Genneric';
import * as Types from '@Redux/types';
// Update Locales convert sang viet nam
const moment = require('moment');
let day = 86400000; // 1 day = 86400

// Messeger Error
export const ERROR_CONNECT_SERVER = 'Không thể kết nối với server';
export const HAS_ERROR = 'Có lỗi xảy ra';

// animation global
export function runAnimated(ref, input = [], output = []) {
  return ref.interpolate({
    inputRange: input,
    outputRange: output,
    extrapolate: 'clamp',
  });
}

// reset navigation
export function resetNavigation(navigation, route) {
  // return navigation.reset({
  //   index: 0,
  //   routes: [
  //     {
  //       name: route,
  //     },
  //   ],
  // });
  return navigation.replace(route);
}

// reset navigation
export function resetRestartNavigation(navigation, route) {
  return navigation.reset({
    index: 0,
    routes: [
      {
        name: route,
      },
    ],
  });
  // return navigation.replace(route);
}

// local Storeage
export async function setLocalStore(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.log('%cindex.js line:48 error', 'color: #007acc;', error);
    return false;
  }
}

export async function getLocalStore(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log('%cindex.js line:48 error', 'color: #007acc;', error);
  }
}

export async function removeLocalStore(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('%cindex.js line:68 error', 'color: #007acc;', error);
  }
}

// Rename KEY
// export function renameKey(keyMap = {}, data = []) {
//   return data.map(function(obj) {
//     return _.mapKeys(obj, function(value, key) {
//       return keyMap[key];
//     });
//   });
// }

export function listToMatrix(list) {
  const newArr = [];
  while (list.length) newArr.push(list.splice(0, 2));

  const result = newArr.map((item, index) => {
    return {id: index, data: item};
  });

  return result;
}

// Format day
export function formatTextDay(text) {
  return 'Còn ' + text + ' ngày';
}

export function getFormatDateFull(text) {
  return moment(text, 'YYYY-MM-DD HH:mm:ss').format('HH:mm [-] DD[/]MM[/]YYYY');
}

export function getFormatDateFullBill(text) {
  return moment(text, 'YYYY-MM-DD HH:mm:ss').format(
    `[${getFormatNumOfWeek(text)}] DD[/]MM[/]YYYY [•] HH:mm`,
  );
}

export function getFormatDate(text) {
  return moment(text, 'YYYY-MM-DD HH:mm:ss').format('DD[/]MM[/]YYYY');
}

export function getFormatDate_(text) {
  return moment(text, 'YYYY-MM-DD HH:mm:ss').format('DD[-]MM[-]YYYY');
}

export function getFormatDate__(text) {
  return moment(text, 'YYYY-MM-DD HH:mm:ss').format('DD[/]MM');
}

export function getFormatDayCurrent() {
  let date = new Date();
  let day = date.getDay(); // 0: sunday -> 6: thứ 7
  let result = 0;
  if (day == 0) {
    result = 6;
  } else {
    result = date.getDay() - 1;
  }
  return result;
}

export function getFormatNumOfWeek(text) {
  var date = moment(text).toDate();
  var days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  var strTime = days[date.getDay()];
  return strTime;
}

export function getFormatNumOfWeekText(text) {
  var date = moment(text).toDate();
  var days = [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy',
  ];
  var strTime = days[date.getDay()];
  return strTime;
}

export function getFormatDayAndMonth(text) {
  return moment(text, 'YYYY-MM-DD HH:mm:ss').format('DD[ Tháng] M');
}

export function getFormatDayAndMonthTime(text) {
  return moment(text, 'YYYY-MM-DD HH:mm:ss').format('DD[ Tháng] M[,] HH:mm');
}

export function getFormatHourMinutes(text) {
  return moment(text, 'YYYY-MM-DD HH:mm:ss').format('HH:mm');
}

export function getFormatHourFromNow(text) {
  return moment(text).fromNow();
}

export function getFormatDateCalendar(text) {
  return moment(new Date(text)).format('[Tháng] MM[/]YYYY');
}

export function getFormatOnFromNow(text) {
  let now = Date.now(); // tính bằng s
  let time_post = new Date(text).getTime();
  if (time_post < now - day) {
    return getFormatNumOfWeekText(text) + ', ' + getFormatDate(text);
  }
  return moment(text).fromNow();
}

export function getFormatOnFromNowNotifi(text) {
  let now = Date.now(); // tính bằng s
  let time_post = new Date(text).getTime();
  if (time_post < now - day) {
    return getFormatNumOfWeekText(text) + ', ngày ' + getFormatDate__(text);
  }
  return moment(text).fromNow();
}

export function getFormatDateNormal(text) {
  return moment(text, 'YYYY-MM-DD HH:mm:ss').format('DD[/]MM[/]YYYY');
}
export function getFormatDateYearFirst(text) {
  return moment(text, 'YYYY-MM-DD HH:mm:ss').format('YYYY[-]MM[-]DD');
}
export function getFormatDateYearFirstV2(text) {
  var month = text.getUTCMonth() + 1;
  var day = text.getUTCDate();
  var year = text.getUTCFullYear();

  return `${year}-${month}-${day}`;
}
export function getYear(text) {
  return moment(text, 'YYYY-MM-DD HH:mm:ss').format('YYYY');
}

export function getTime12hours(text) {
  return moment(text).format('LT');
}

export function getYearNow() {
  var d = new Date();
  var y = d.getFullYear();
  return y.toString();
}
export function getFormatMonthYear(text) {
  return moment(text, 'YYYY-MM-DD HH:mm:ss').format('[T]MM[/]YYYY');
}
export function formatUrlImage(text) {
  return text.slice(17);
}

export function ampmTo24(time) {
  var hours = Number(time.match(/^(\d+)/)[1]);
  var minutes = Number(time.match(/:(\d+)/)[1]);
  var AP = time.match(/\s(.*)$/);
  if (!AP) AP = time.slice(-2);
  else AP = AP[1];
  if (AP == 'PM' && hours < 12) hours = hours + 12;
  if (AP == 'AM' && hours == 12) hours = hours - 12;
  var Hours24 = hours.toString();
  var Minutes24 = minutes.toString();
  if (hours < 10) Hours24 = '0' + Hours24;
  if (minutes < 10) Minutes24 = '0' + Minutes24;

  return Hours24 + ':' + Minutes24;
}

export function timeToAmPM(time) {
  let hours = Number(time.split(':')[0]);
  let minutes = Number(time.split(':')[1]);
  let session = 'AM';
  // AM 00:00-> 12:00 | PM 12:01 -> 23:59
  if (hours > 12) {
    hours = hours - 12;
    session = 'PM';
  }
  if (hours === 12) {
    if (minutes > 0) {
      hours = hours - 12;
      session = 'PM';
    } else {
      session = 'AM';
    }
  }

  // Chuẩn hóa time 6:6 vd: 06:06
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  return hours + ':' + minutes + ' ' + session;
}

export function validateTime(timeStart, timeEnd) {
  let arrTimeStart = timeStart.split(':');
  let arrTimeEnd = timeEnd.split(':');

  // Nếu giờ start bé hơn giờ end -> đúng
  if (parseInt(arrTimeStart[0]) < parseInt(arrTimeEnd[0])) {
    //  alert('Valid');
    return true;
  }
  // Nếu giờ start  === giờ end thì so sánh đến phút
  else if (parseInt(arrTimeStart[0]) == parseInt(arrTimeEnd[0])) {
    if (parseInt(arrTimeStart[1]) < parseInt(arrTimeEnd[1])) {
      //  alert('Valid');
      return true;
    } else {
      // alert('InValid');
      return false;
    }
  } else {
    // alert('InValid');
    return false;
  }
}

//Has Internet -> true
export function checkInternet() {
  const netInfo = useNetInfo();
  return netInfo.isConnected;
}

export const getIcon = icon => {
  return {
    uri: icon && icon.length > 0 ? icon[0]['path'] : null,
  };
};

export const getIconBg = icon => {
  return {
    uri: typeof icon === 'object' && icon?.path != null ? icon['path'] : null,
  };
};

export const getIconBgUrl = icon => {
  return {
    url: typeof icon === 'object' && icon?.path != null ? icon['path'] : null,
  };
};

// Format money 1000 -> 1 000
export const formatMoney = (string, character = '.') => {
  string = string + '';
  let money = '';
  let lengString = string.length;
  let start = lengString - Number.parseInt(lengString / 3) * 3;
  money += string.substring(0, start);
  for (let i = start; i < lengString; i += 3) {
    if (i != 0) {
      money += character;
    }
    money += string.substring(i, i + 3);
  }
  return money;
};

// \ -> /
export const getURL = url => {
  url = url.replace(/^\//, '');
  const host = Setting.API_URL.replace(/\/$/, '');
  return host + '/' + url;
};

// thứ 2-> 0
export const weekToValue = week => {
  switch (week) {
    case 'Thứ 2':
      return 0;
    case 'Thứ 3':
      return 1;
    case 'Thứ 4':
      return 2;
    case 'Thứ 5':
      return 3;
    case 'Thứ 6':
      return 4;
    case 'Thứ 7':
      return 5;
  }
  return 6;
};

export const nonAccentVietnamese = str => {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
  str = str.replace(/\u02C6|\u0306|\u031B/g, '');
  return str;
};

// abc -> Abc
export const uppercaseCharFirstOne = text => {
  return text !== null && text.length > 0
    ? text.charAt(0).toUpperCase() + text.slice(1)
    : '';
};

// Split 10:10 -> date
export const caseSplitTime = text => {
  if (text !== null && text.length > 0) {
    let time = text.split(':');
    let hours = Number(time[0]);
    let minutes = Number(time[1]);
    return new Date(new Date().setHours(hours, minutes, 0, 0));
  }
  return new Date();
};

// delay
export const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

// Notification System
export const ToastCustom = (title, description, type, time = 1000) => {
  return Toast.show({
    text1: title,
    text2: description,
    show: true,
    type: type,
    visibilityTime: time,
  });
};

// {key:value}-> parts[{key:value}]
export const convertJSONtoFormData = params => {
  const fd = new FormData();
  Object.keys(params).forEach(key => {
    fd.append(key, params[key]);
  });
  return fd;
};

// Image to file -> path
export const getAssetFileAbsolutePath = async assetPath => {
  const dest = `${RNFS.TemporaryDirectoryPath}${Math.random()
    .toString(36)
    .substring(7)}.${'jpg'}`;

  try {
    let absolutePath = await RNFS.copyAssetsFileIOS(assetPath, dest, 0, 0);
    return absolutePath;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Video to file -> path
export const convertUriPhVideoToUri = async (uri, extenision) => {
  try {
    RNConvertPhAsset.convertVideoFromUrl({
      url: uri,
      convertTo: extenision,
      quality: 'original',
    })
      .then(value => {
        console.log('%cindex.js line:419 value', 'color: #007acc;', value);
        return value;
      })
      .catch(error => {
        console.log('%cindex.js line:421 e', 'color: #007acc;', error);
      });
  } catch (error) {
    return Promise.reject(error);
  }
};

// Ph to assets-library
export const convertLocalIdentifierToAssetLibrary = localIdentifier => {
  const hash = localIdentifier.split('/')[0];
  return `assets-library://asset/asset.${'jpg'}?id=${hash}&ext=${'jpg'}`;
};

// Ph to assets-library
export const convertLocalIdentifierToAssetLibraryVideo = localIdentifier => {
  const hash = localIdentifier.split('/')[0];
  console.log('%cindex.js line:434 hash', 'color: #007acc;', hash);
  return `assets-library://asset/asset.${'mov'}?id=${'CF8E3CFD-2183-49CC-AD10-8A547D38E784/L0/001'}&ext=${'mov'}`;
};

export const insertHTMLContent = (
  title = '',
  content = '',
  newsOptionLinks = [],
) => {
  const style = `<style> 
      body { font-family: 'Montserrat', sans-serif; padding: 0 16px;} 
      p{ color: white !important; max-width: 100% !important; overflow-wrap: break-word; } 
      strong{ color: white !important; } 
      h1{ color: white !important;} h5{ color: white !important; } 
      span{ color: white !important;}
  </style>`;
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,800" rel="stylesheet">
      ${style}
  </head>
  <body style="background-color: black;
              padding-bottom: 16px;" >

    <div>
      <p style="text-align:left
      color: #FFFFFF; 
      font-family: Montserrat;
      font-style: bold;
      font-weight: bold;
      font-size: 18px;">${'title'}</p>

      <p style="text-align:left
      color: #FFFFFF; 
      opacity: 0.5;
      font-family: Montserrat;
      font-size: 12px;">${'date'}</p>
    </div>

    <div style="display: flex;
        flex-flow: row wrap;">
        dfdfdfdfdfdfdfdfdffd
       
        ${newsOptionLinks &&
          newsOptionLinks.map(
            () =>
              `<div
              style="
                  background: rgba(0, 149, 116, 0.5);
                  padding: 3px 5px;
                  border-radius: 15px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-bottom: 5px;"
            >
              <img style="height: 15px; width: 15px; margin-right: 5px;" 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGYSURBVHgB7ZnrcYMwDIBFrgO0G9AJyghkk2yQEdqO0AkyQkdgBTqBvEHZQJEvcMfTAVsy/sF3p8uBwfnIyQ8FgIODRTJQhIhy/sjBD5NlmYFYWFmOisK5cbyCNq0wkhy/4+8QTQ96pEMF/imxxBunStMdnEAIRWFL0T8QkVYWnvACgQQI/3DUHHagXSHSA/sOun+OYqavL8c9JUhA/rPExdFntUbaK6cpLIdrR9sfrGCzNIUPOuNoa2AFm6RJZpYoHG0fIAnJrXTYPvy4/6vjnhK2QvJLM3JcOIo2Pp9cX/Z9ns7TpLNw5Bw38MSZ0xR5pVvLonSqwpZZ6ZSFLRPpRIUH8/dkP21HNqQlbMuu9/6JwS9Nj41MDulgOM7jk2JFgAKG4zxX3J5mLly1/itjYEHYMpBu67Bv2BcDDuFFyL0h1wRpZl+SsjgGCe8gjiLCEcVRVDiCOKoIK4qjqrCCOEYRFhTHqMIC4riLcIA47ircsUE8DeGOFeJpCXc4xNMU7pgRr7SEpV9f2P+abfXT8NayhoOD+NwB7NOc7Lq8gvoAAAAASUVORK5CYII="></img>
              <span style="text-align:left
                  color: #FFFFFF; 
                  font-style: normal;
                  font-weight: normal;
                  font-size: 11px;">
                  ${'item.description'}
              </span>
            </div>`,
          )}
      </div>

    <p style="text-align:left
      color: #FFFFFF; 
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 125%;
      text-align: justify;
      font-family: Montserrat;">${content}</p>

  </body>
  </html>`;
};

// Permission.

export async function checkPermissionStorage() {
  if (Platform.OS === 'ios') {
    return true;
  } else {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

      const hasPermission = await PermissionsAndroid.check(permission);
      if (hasPermission) {
        console.log('%cAlbum.js line:68 "object"', 'color: #007acc;', 'object');
        return true;
      }

      const status = await PermissionsAndroid.request(permission);
      return status === 'granted';
    } catch (error) {
      console.log('%cAlbum.js line:85 e', 'color: #007acc;', error);
      return false;
    }
  }
}

export const naviSettingSystem = async () => {
  await Linking.openSettings();
};

export const requestPermissionSettings = async () => {
  Alert.alert(
    'Thông báo',
    'Bạn vui lòng cấp quyền nhấn `CÀI ĐẶT -> QUYỀN -> CẤP QUYỀN` để ứng dụng hoạt động tốt',
    [
      {
        text: 'CÀI ĐẶT',
        onPress: () => naviSettingSystem(),
      },
    ],
    {cancelable: false},
  );
};

export const checkPermissionCamera = async () => {
  //result would be false if not granted and true if required permission is granted.
  try {
    if (Platform.OS === 'ios') {
      return true;
    }
    const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
    const result = await PermissionsAndroid.check(permission);
    if (result) {
      const checkStorage = await checkPermissionStorage();
      if (checkStorage) {
        return checkStorage;
      } else {
        return false;
      }
    } else {
      const status = await PermissionsAndroid.request(permission);
      if (status === 'granted') {
        const checkStorage = await checkPermissionStorage();
        if (checkStorage) {
          return checkStorage;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  } catch (error) {
    console.log('%cItemCamera.js line:109 error', 'color: #007acc;', error);
    return false;
  }
};

export const checkAccess = (localStore, dispatch, actionUI = () => {}) => {
  console.log('%cindex.js line:630 object', 'color: #007acc;', localStore);
  setTimeout(() => {
    dispatch(
      action(Types.getTypesUpdate('ACCESS_STATUS'), {
        isCheck: true,
        data: [{key: localStore, value: true}],
      }),
    );
  }, 300);
  actionUI();
};

export const checkDenied = (permissions, dispatch, actionUI = () => {}) => {
  for (let i = 0; i < Object.keys(permissions).length; i++) {
    if (Object.values(permissions)[i] === 'granted') {
    } else {
      let key = Object.keys(permissions)[i];
      console.log('%cindex.js line:645 key', 'color: #007acc;', key);
      switch (key) {
        case Platform.select({
          android: PERMISSIONS.ANDROID.CAMERA,
          ios: PERMISSIONS.IOS.CAMERA,
        }):
          checkAccess('camera', dispatch, actionUI);
          return;
        case Platform.select({
          android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
        }):
          checkAccess('localStore', dispatch, actionUI);
          return;
        case Platform.select({
          android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        }):
          checkAccess('location', dispatch, actionUI);
          return;
      }
    }
  }
};

export const setStatusBar = barStyle => {
  if (barStyle) {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('rgba(0,0,0,0.0)');
    }
  } else {
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('rgba(255,255,255,1)');
    }
  }
};

export const selectPermissions = key => {
  let per = null;
  switch (key) {
    case 'camera':
      per = Platform.select({
        android: PERMISSIONS.ANDROID.CAMERA,
        ios: PERMISSIONS.IOS.CAMERA,
      });
      break;
    case 'localStore':
      per = Platform.select({
        android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
      });
      break;
    case 'location':
      per = Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      });
      break;
  }
  return per;
};

export const checkPermissions = async key => {
  let per = selectPermissions(key);
  let checkper = await check(per);
  console.log('%cindex.js line:664 object', 'color: #007acc;', checkper);
  let resultCheck = checkResStatus(checkper);
  if (resultCheck) {
    return new Promise(resolve => {
      return resolve(true);
    });
  }

  return new Promise(resolve => {
    return resolve(false);
  });
};

export const requestPermissions = async key => {
  let per = selectPermissions(key);
  let checkper = await check(per);
  let resultCheck = checkResStatus(checkper);
  if (resultCheck) {
    return new Promise(resolve => {
      return resolve(true);
    });
  }

  return new Promise((resolve, reject) => {
    request(per)
      .then(result => {
        const res = checkResStatus(result);
        if (res) {
          return resolve(true);
        } else {
          return resolve(false);
        }
      })
      .catch(err => {
        console.log('%cindex.js line:669 err', 'color: #007acc;', err);
        return reject(false);
      });
  });
};

export const requestMultiplePermissions = async arr => {
  let per = [];
  // Lấy ra các permission
  arr.map(item => {
    per.push(selectPermissions(item));
  });

  // Xử lý từng permission
  return new Promise(resolve => {
    requestMultiple(per)
      .then(statuses => {
        return resolve(statuses);
      })
      .catch(err => {
        console.log('%cindex.js line:669 err', 'color: #007acc;', err);
        return reject({});
      });
  });
};

export const checkResStatus = result => {
  switch (result) {
    case RESULTS.UNAVAILABLE:
    case RESULTS.DENIED:
    case RESULTS.LIMITED:
    case RESULTS.BLOCKED:
      return false;
    case RESULTS.GRANTED:
      return true;
  }
  return false;
};

export const configCameraLib = () => {
  let configs = {
    cropping: false,
    useFrontCamera: true,
  };
  if (Platform.OS === 'android') {
    // configs = {
    //   useFrontCamera: true,
    //   // smartAlbums: 'UserLibrary',
    // };
  } else {
    configs[`smartAlbums`] = ['UserLibrary'];
  }
  return configs;
};

const getChooseItem = (start, to, data) => {
  const tempArr = [];
  for (let i = start; i < to; i++) {
    if (data.length === i) {
      break;
    }
    tempArr.push(data[i]);
  }
  return tempArr;
};

export const paging = (page, limit, data) => {
  // Lấy điểm đầu và cuối
  const start = (page - 1) * limit;
  const to = page * limit;

  // Thực hiện Query
  const query = getChooseItem(start, to, data);
  const c = data.length;

  // Tính số trang
  const number_page = Number(c / limit) + (c % limit == 0 ? 0 : 1);

  return {
    content: query,
    total_records: c,
    total_pages: Number(number_page),
    page: page,
    has_next: page >= number_page ? false : true,
    has_prev: page > 1 ? true : false,
  };
};

// xx.xxx.xxxĐ
export const formatMoneyVND = money => {
  return money.toLocaleString('it-IT', {
    style: 'currency',
    currency: 'VND',
  });
};

export const validate1Number = (str = '') => {
  let pattern = /^[0-9]{0,1}$/g;

  let result = str.match(pattern);

  return result;
};

export const validate2Number = (str = '') => {
  let pattern = /^[0-9]{0,2}$/g;

  let result = str.match(pattern);

  return result;
};

export const validate3Number = (str = '') => {
  let pattern = /^[0-9]{0,3}$/g;

  let result = str.match(pattern);

  return result;
};

export const validate10Number = (str = '') => {
  let pattern = /^[0-9]{0,10}$/g;

  let result = str.match(pattern);

  return result;
};

export const validatePhoneNumber = (str = '') => {
  let pattern = /^0[35789]{1}\d{8}$/;

  let result = str.match(pattern);

  return result;
};

export const changeStatusBar = (
  dispatch,
  barStyle = 'light-content',
  backgroundColor = 'transparent',
) => {
  try {
    dispatch(
      action(Types.getTypesUpdate('CHANGE_STATUSBAR'), {
        barStyle: barStyle,
        backgroundColor: backgroundColor,
      }),
    );
  } catch (error) {
    console.log('%cindex.js line:250 error', 'color: #007acc;', error);
  }
};
