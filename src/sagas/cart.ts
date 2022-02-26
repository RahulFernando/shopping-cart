import { takeEvery, call, put } from 'redux-saga/effects';

// service
import service from '../services/cart';

import * as cartActions from '../reducers/cart';

function* addToCart({ payload }: any): any {
  try {
    const response = yield call(service.patchCart, payload);

    if (response.status === 200) {
      yield put({
        type: cartActions.addToCartSuccess.type,
        payload: response.data,
      });
    } else {
      yield put({
        type: cartActions.addToCartFailure.type,
        payload: response.message,
      });
    }
  } catch (error: any) {
    yield put({
      type: cartActions.addToCartFailure.type,
      response: error.message,
    });
  }
}

function* fetchCart({ payload }: any): any {
  try {
    const response = yield call(service.getCart, payload);

    if (response.status === 200) {
      yield put({
        type: cartActions.fetchCartSuccess.type,
        payload: response.data.cart,
      });
    } else {
      yield put({
        type: cartActions.fetchCartFailure.type,
        payload: response.message,
      });
    }
  } catch (error: any) {
    yield put({
      type: cartActions.fetchCartFailure.type,
      response: error.message,
    });
  }
}

export default function* watchers() {
  yield takeEvery(cartActions.addToCart.type, addToCart);
  yield takeEvery(cartActions.fetchCart.type, fetchCart);
}
