import AsyncStorage from '@react-native-community/async-storage';
export const TIME_SECONDS_NOW = new Date().getTime() / 1000;

//Token Login
export const setToken = async value => {
  try {
    await AsyncStorage.setItem('@token', value);
    return true;
  } catch (e) {
    console.log('%cAxios.js line:33 e', 'color: #007acc;', e);
    return false;
  }
};

export const getToken = async () => {
  let token = null;
  try {
    token = await AsyncStorage.getItem('@token');
  } catch (e) {
    console.log('%cAxios.js line:42 e', 'color: #007acc;', e);
  }
  return token;
};
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('@token');
  } catch (e) {
    // remove error
    console.log('%cAxios.js line:56 e', 'color: #007acc;', e);
  }
};

// Time Expires
export const setTimeExpires = async value => {
  try {
    await AsyncStorage.setItem('@expires', value);
  } catch (e) {
    console.log('%cAxios.js line:33 e', 'color: #007acc;', e);
  }
};

export const getTimeExpires = async () => {
  let token = null;
  try {
    token = await AsyncStorage.getItem('@expires');
  } catch (e) {
    console.log('%cAxios.js line:42 e', 'color: #007acc;', e);
  }
  return token;
};
export const removeTimeExpires = async () => {
  try {
    await AsyncStorage.removeItem('@expires');
  } catch (e) {
    // remove error
    console.log('%cAxios.js line:56 e', 'color: #007acc;', e);
  }
};
