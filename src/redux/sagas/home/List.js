import {takeLatest, put, call} from 'redux-saga/effects';

import * as Apis from '@Apis/Home';
import * as Types from '@Types';
import {action} from '@Redux/Genneric';
function* handleSagas(at) {
  const {payload, config} = at;

  try {
    let response = yield call(Apis.getHandBook, payload);
    const {data, code} = response.data;
    if (code === 200 && typeof data === 'object') {
      yield put(
        action(Types.getTypesSucess('LIST_HOME'), {
          data: data,
          isLoadMore: config.isLoadMore,
        }),
      );
    }
  } catch (e) {
    console.log('%cLogin.js line:27 e', 'color: #007acc;', e);
  } finally {
  }
}

export default function* () {
  yield takeLatest(Types.getTypesRequesting('LIST_HOME'), handleSagas);
}
