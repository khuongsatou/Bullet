import * as Types from '@Types';

let init = {
  barStyle: 'dark-content',
  backgroundColor: 'transparent',
};

export default (state = init, action) => {
  switch (action.type) {
    case Types.getTypesUpdate('CHANGE_STATUSBAR'):
      return {
        ...state,
        barStyle: action.payload.barStyle
          ? action.payload.barStyle
          : state.barStyle,
        backgroundColor: action.payload.backgroundColor
          ? action.payload.backgroundColor
          : state.backgroundColor,
      };
  }

  return state;
};
