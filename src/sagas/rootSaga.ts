import { fork } from 'redux-saga/effects';

import authSaga from './auth';
import productSaga from './product';
import cartSaga from './cart';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(productSaga);
  yield fork(cartSaga);
}
