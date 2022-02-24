import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

// reducers
import createReducer from '../reducers';

// sagas
import rootSaga from '../sagas/rootSaga';

const appReducer = combineReducers(createReducer);

export default function configureAppStore() {
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const { run: runSaga } = sagaMiddleware;
    const middlewares = [sagaMiddleware];

    const store = configureStore({
        reducer: appReducer,
        middleware: [
            ...middlewares,
        ],
        devTools: process.env.NODE_ENV !== 'production',
    });

    runSaga(rootSaga);

    return store;
}