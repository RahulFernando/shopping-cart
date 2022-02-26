import { fork } from 'redux-saga/effects';

import authSaga from './auth';
import productSaga from './product';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(productSaga);
}
