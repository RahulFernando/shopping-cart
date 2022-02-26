import { takeEvery, call, put } from 'redux-saga/effects';

// service
import service from '../services/auth';

import * as authActions from '../reducers/auth';

function* loginUser({ payload }: any): any {
  try {
    const response = yield call(service.logUser, payload);

    if (response.status === 200) {
      yield put({
        type: authActions.loginUserSuccess.type,
        payload: response.data,
      });
    } else {
      yield put({
        type: authActions.loginUserFailure.type,
        payload: response.message,
      });
    }
  } catch (error: any) {
    yield put({
      type: authActions.loginUserFailure.type,
      payload: error.message,
    });
  }
}

function* registerUser({ payload }: any): any {
  try {
    const response = yield call(service.registerUser, payload);

    if (response.status === 201) {
      yield put({
        type: authActions.registerUserSuccess.type,
        payload: response.data,
      });
    } else {
      yield put({
        type: authActions.registerUserFailure.type,
        payload: response.message,
      });
    }
  } catch (error: any) {
    yield put({
      type: authActions.registerUserFailure.type,
      payload: error.message,
    });
  }
}

export default function* watchers() {
  yield takeEvery(authActions.loginUser.type, loginUser);
  yield takeEvery(authActions.registerUser.type, registerUser);
}
