import {all} from 'redux-saga/effects';
import Home from './List';
export default function* () {
  yield all([Home()]);
}
