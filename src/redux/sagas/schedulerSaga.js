import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchAssigments() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('/api/scheduler', config);
        yield put({ type: 'SET_ASSIGNMENTS', payload: response.data });
    } catch (error) {
        console.log('Teams get request failed', error);
    }
}

function* schedulerSaga() {
    yield takeEvery('FETCH_ASSIGNMENTS', fetchAssigments);
}

export default schedulerSaga;