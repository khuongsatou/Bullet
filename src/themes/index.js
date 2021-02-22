import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';

export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);

export const android = Platform.OS === 'android';
export const ios = Platform.OS === 'ios';

const vContainer = {
  alignItems: 'center',
  justifyContent: 'center',
};

const vRow = {
  flexDirection: 'row',
};

const vCol = {
  flexDirection: 'column',
};

const styles = StyleSheet.create({
  //Use Global.
  vContainer: {
    flex: 1,
    ...vContainer,
  },

  //Row styles
  vRow: {
    ...vRow,
  },
  vRow_0_3: {
    ...vContainer,
    ...vRow,
    flex: 1,
  },

  vRow_0_5: {
    ...vContainer,
    ...vRow,
    flex: 1,
  },

  vRow_1: {
    ...vContainer,
    ...vRow,
    flex: 1,
  },
  vRow_1_5: {
    flex: 1.5,
    ...vRow,
  },
  vRow_2: {
    ...vContainer,
    ...vRow,
    flex: 2,
  },
  vRow_3: {
    ...vContainer,
    ...vRow,
    flex: 3,
  },
  vRow_4: {
    ...vContainer,
    ...vRow,
    flex: 4,
  },
  vRow_5: {
    ...vContainer,
    ...vRow,
    flex: 5,
  },
  vRow_6: {
    ...vContainer,
    ...vRow,
    flex: 6,
  },

  //Column Styles
  vCol: {
    ...vCol,
  },
  vCol_1: {
    ...vContainer,
    ...vCol,
    flex: 1,
  },
  vCol_2: {
    ...vContainer,
    ...vCol,
    flex: 2,
  },
  vCol_3: {
    ...vContainer,
    ...vCol,
    flex: 3,
  },
  vCol_4: {
    ...vContainer,
    ...vCol,
    flex: 4,
  },
  vCol_5: {
    ...vContainer,
    ...vCol,
    flex: 5,
  },
  vCol_6: {
    ...vContainer,
    ...vCol,
    flex: 6,
  },

  vMarginHorizontal_16: {
    marginHorizontal: 16,
  },
  vMarginVertical_16: {
    marginVertical: 16,
  },

  vImage_100_w_h: {
    width: '100%',
    height: '100%',
  },
  vImage_24: {
    width: 24,
    height: 24,
  },
  vImage_15: {width: 15, height: 15},

  vImage_40: {
    width: 40,
    height: 40,
  },

  // Border

  vBorderRadius_5: {
    borderRadius: 5,
  },

  //Shadow styles
  vShadow_Card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  //BG debug
  vBackground_white: {
    backgroundColor: '#fff',
  },

  //oval
  vDashOval: {
    width: 70,
    height: 70,
    borderWidth: 1.5,
    borderColor: '#FF5F33',
    borderRadius: 100,
    borderStyle: 'dashed',
  },

  // Định nghĩa:
  // ios:
  // + OpenSans-Regular : 400 normal // Có thể tùy chỉnh weight
  // + OpenSans-SemiBold : 600 normal
  // + OpenSans-Bold : 700 normal
  // + OpenSans-ExtraBold : 800 normal
  // android:
  // + OpenSans-Regular : null
  // + OpenSans-SemiBold : null
  // + OpenSans-Bold : null
  // + OpenSans-ExtraBold : null

  //font News.
  vHeaderSan: {
    // fontFamily:
    //   Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans-SemiBold',

    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    color: '#042C5C',
  },

  vNameSan: {
    // fontFamily:
    //   Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans-ExtraBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#042C5C',
  },

  //- title: normal-600-18
  vPointSan: {
    // fontFamily:
    //   Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    color: '#042C5C',
  },

  //- title: normal - normal - 12
  vTitleSmallSan: {
    // fontFamily: Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#6A788C',
  },
  //- description: normal - 600 - 14
  vDescriptionSmallSan: {
    // fontFamily:
    //   Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
  },
  //- category: normal - 600 - 16
  vCategorySan: {
    // fontFamily:
    // Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
  },
  //- text: normal - normal - 14
  vTextSan: {
    // fontFamily: Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#333',
  },
  //- text: normal - 500 - 14
  vTextRoboto: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    color: '#333',
  },
  //- text: normal - 500 - 14
  vButtonRoboto: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },

  // Height Fixed Area
  vCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Tăng vùng chạm
  vHitlop: {top: 20, bottom: 20, left: 20, right: 20},

  // Button Modal
  vBtnModal: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    minWidth: '100%',
    borderRadius: 8,
  },

  vBottom: {position: 'absolute', bottom: 0},

  //Line HeaderNavigation
  vLineHeaderNavigation: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },

  //Draw
  vDot: {
    height: 8,
    width: 8,
    backgroundColor: '#FF7D59',
    borderRadius: 4,
  },

  vBorderTopLeftAndTopRightRadius_10: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  vPosition: {position: 'absolute', top: 0, left: 0},

  //boxShadow headerNavigation
  vShadowNavigation: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.27,
        shadowRadius: 0.95,
        zIndex: 100,
        borderBottomColor: 'rgba(0,0,0, 0.4)',
        borderBottomWidth: 0.01,
      },
      android: {
        height: 0.5,
        elevation: 2,
        borderBottomColor: 'rgba(0,0,0, 0.1)',
        opacity: 0.4,
      },
    }),
  },

  vMarginStatusBar: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
  },

  // Bắt buộc phải có backgroundColor là màu trắng
  vShadowCardLogin: {
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default styles;
