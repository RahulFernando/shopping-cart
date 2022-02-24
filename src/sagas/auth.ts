import { takeEvery, call, put } from 'redux-saga/effects';

// service
import service from '../services/auth';

import * as authActions from '../reducers/auth';

function* loginUser({ payload }: any): any {
  try {
    const response = yield call(service.logUser, payload);

    if (response.status === 200) {
      yield put({ type: authActions.loginUserSuccess.type, response });
    } else {
      yield put({ type: authActions.loginUserFailure.type, response });
    }
  } catch (error) {
    yield put({ type: authActions.loginUserFailure.type, error });
  }
}

export default function* watchers() {
  yield takeEvery(authActions.loginUser.type, loginUser);
}
