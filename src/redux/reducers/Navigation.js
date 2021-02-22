import * as Types from '@Types';
let init = {
  // Event Hot
  routeName: '',
};

export default (state = init, action) => {
  switch (action.type) {
    // Event HOT
    case Types.getTypesUpdate('NAVIGATE'):
      return {
        ...state,
        routeName: action.payload.routeName,
      };
  }

  return state;
};
