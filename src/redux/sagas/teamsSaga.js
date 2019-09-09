import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchTeams() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('/api/teams', config);
        yield put({ type: 'SET_TEAMS', payload: response.data });
    } catch (error) {
        console.log('Teams get request failed', error);
    }
}

function* teamsSaga() {
    yield takeEvery('FETCH_TEAMS', fetchTeams);
}

export default teamsSaga;