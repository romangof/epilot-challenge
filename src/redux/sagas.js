import { get } from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_REPOSITORIES,requestSuccess, requestError } from './actions';

function* fetchRepositories({payload}) {
    try {
        const response = yield call(get, payload.url);
        const repositories = response.data;

        yield put(requestSuccess({repositories, username: payload.user}));
    } catch (error) {
        yield put(requestError(payload));
    }
}

function* watchFetchRepositories() {
    yield takeEvery(FETCH_REPOSITORIES, fetchRepositories);
}

export default function* rootSaga() {
    yield all([
        watchFetchRepositories()
    ]);
}