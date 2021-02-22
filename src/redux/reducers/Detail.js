import * as Types from '@Types';
let init = {
  // Event Hot
  listDetail: {
    title: '',
    description: '',
  },
  loading: false,
};

export default (state = init, action) => {
  switch (action.type) {
    case Types.getTypesSucess('DETAIL'):
      return {
        ...state,
        listDetail: {
          title: action.payload.title ? action.payload.title : state.title,
          description: action.payload.description
            ? action.payload.description
            : state.description,
        },
        loading: false,
      };
  }

  return state;
};
