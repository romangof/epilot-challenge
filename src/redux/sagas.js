import { get } from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { CHANGE_PAGE, FETCH_REPOSITORIES } from './actions';

function* fetchRepositories(payload) {
    try {
        console.log(99999, payload);

        yield put({ type: CHANGE_PAGE, payload: { status: 'loading' }});

        yield call(get, payload);

        yield put({ type: CHANGE_PAGE, payload: { status: 'loaded' }});
    } catch (error) {
        yield put({ type: CHANGE_PAGE, status: 'error', payload: error });
    }
    
}

// function* watchFetchRepositories() {
export default function* rootSaga() {
    yield takeEvery(FETCH_REPOSITORIES, fetchRepositories);
}

// export default function rootSaga() {
    // yield takeLatest(FETCH_REPOSITORIES, fetchRepositories);
    // yield all([
    //     watchFetchRepositories()
    // ]);
// }