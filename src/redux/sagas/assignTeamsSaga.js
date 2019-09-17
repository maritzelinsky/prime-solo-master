import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* assignTeam(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        yield axios.post(`api/scheduler/`, action.payload, config);
        yield put({
            type: 'FETCH_ASSIGNMENTS'
        })
    } catch (error) {
        console.log('assign post request failed', error)
    }
}

function* assignTeamSaga() {
    yield takeEvery('ASSIGN_TEAM', assignTeam);
}

export default assignTeamSaga;