// Imports: Dependencies
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
// import Reactotron from 'kidbox/Reactotron';
// Imports: Redux Root Reducer
import rootReducer from '@Redux/reducers';
// Imports: Redux Root Saga
import {rootSaga} from '@Redux/sagas';
// create our new saga monitor
// const sagaMonitor = Reactotron.createSagaMonitor();
// Middleware: Redux Saga
// const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const sagaMiddleware = createSagaMiddleware({});
// Logger devtool
let middleware = [];
middleware = [sagaMiddleware, logger];

// Redux: Store
const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(sagaMiddleware),
    applyMiddleware(...middleware),
    // Reactotron.createEnhancer(),
  ),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store};
