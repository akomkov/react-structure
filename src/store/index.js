import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import { all } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';
import * as Immutable from 'immutable';

// import App from '../entities/App/App.reducer';
// import Organizations from '../entities/Organizations/Organizations.reducer';
import Repositories from '../entities/Repositories/Repositories.reducer';
// import Users from '../entities/Users/Users.reducer';

// import { runnableAppSagas } from '../entities/App/App.sagas';
// import { runnableOrganizationsSagas } from '../entities/Organizations/Organizations.sagas';
// import { runnableRepositoriesSagas } from '../entities/Repositories/Repositories.sagas';
// import { runnableUsersSagas } from '../entities/Users/Users.sagas';

// Logger
const logger = createLogger({
  stateTransformer: (state) => {
    const newState = {};

    Object.keys(state).forEach((key) => {
      if (Immutable.isImmutable(state[key])) {
        newState[key] = state[key].toJS();
      } else {
        newState[key] = state[key];
      }
    });

    return newState;
  },
});

// Reducers
const reducer = combineReducers({
  // App,
  // Organizations,
  Repositories,
  // Users
});

// Sagas
const rootSaga = function* rootSaga() {
  // yield all([
  //   ...(runnableOrganizationsSagas.reduce((acc, saga) => {
  //     acc.push(saga());
  //     return acc;
  //   }, [])),
  // ]);
  // yield all([
  //   ...(runnableRepositoriesSagas.reduce((acc, saga) => {
  //     acc.push(saga());
  //     return acc;
  //   }, [])),
  // ]);
};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middleware = [thunk, sagaMiddleware];
if (process.env.NODE_ENV !== 'production') middleware = [...middleware, logger];

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

export default store;
