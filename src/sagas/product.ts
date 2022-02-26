import { takeEvery, call, put } from 'redux-saga/effects';

// service
import service from '../services/products';

import * as productActions from '../reducers/products';

function* fetchProduct({ payload }: any): any {
  try {
    const response = yield call(service.getProducts);

    if (response.status === 200) {
      yield put({
        type: productActions.fetchProductsSuccess.type,
        payload: response.data,
      });
    } else {
      yield put({
        type: productActions.fetchProductsFailure.type,
        payload: response.message,
      });
    }
  } catch (error: any) {
    yield put({
      type: productActions.fetchProductsFailure.type,
      response: error.message,
    });
  }
}

export default function* watchers() {
  yield takeEvery(productActions.fetchProducts.type, fetchProduct);
}
