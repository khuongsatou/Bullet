// Imports: Dependencies
import {combineReducers} from 'redux';
import * as Types from '@Types';
// Imports: Reducers generic
import Home from './Home';
import Navigation from './Navigation';
import StatusBar from './StatusBar';
import Detail from './Detail';

const appReducer = combineReducers({
  home: Home,
  navigation: Navigation,
  statusBar: StatusBar,
  detail: Detail,
});

// Redux: Root Reducer
const rootReducer = (state, action) => {
  if (action.type === Types.getTypesUpdate('DESTROY_SESSION')) {
    state = undefined;
  }

  return appReducer(state, action);
};
// Exports
export default rootReducer;
