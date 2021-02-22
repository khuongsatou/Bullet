// Imports: Dependencies
import {all} from 'redux-saga/effects';
// Imports: Redux Sagas
// import Login from './login';
import Home from './home';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([Home()]);
}
