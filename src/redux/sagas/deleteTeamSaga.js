import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* deleteTeam(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        yield axios.delete(`api/teams/${action.payload}`, action.payload, config);
        yield put({
            type: 'FETCH_TEAMS'
        })
    } catch (error) {
        console.log('add team post request failed', error)
    }
}

function* deleteTeamSaga() {
    yield takeEvery('DELETE_TEAM', deleteTeam);
}

export default deleteTeamSaga;