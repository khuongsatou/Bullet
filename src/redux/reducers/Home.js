import * as Types from '@Types';
let init = {
  // Event Hot
  listHome: {
    loading: true,
    data: [],
    isRefreshing: false, // show top loading
    isFull: false, // Kiểm tra xem hết Item chưa
    isPrevious: false, // kiểm tra nếu không có item nào thì tắt loading footer
    loadingButton: false,
  },
  loading: false,
};

export default (state = init, action) => {
  switch (
    action.type
    // Event HOT
    // case Types.getTypesSucess('HOME_EVENT_HOT'):
    //   return {
    //     ...state,
    //     listHome: {
    //       loading: false,
    //       data: action.payload.isLoadMore
    //         ? state.hot.data.concat(action.payload.data)
    //         : action.payload.data,
    //       isRefreshing: false,
    //       page: action.payload.data.page,
    //       isFull: action.payload.data.has_next ? false : true, // false -> tắt isFooterRefresh là true
    //       isPrevious: action.payload.data.has_prev ? false : true, // false -> tắt isFooterRefresh là true
    //       loadingButton: false,
    //     },
    //     loading: false,
    //     error: '',
    //   };
  ) {
  }

  return state;
};
