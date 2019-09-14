import axios from  'axios';
import {put, takeEvery} from 'redux-saga/effects';

function* addTeam(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        
        yield axios.post(`api/teams/`, action.payload, config);
        yield put({
            type: 'SET_DETAILS'
        })
    } catch (error) {
        console.log('add team post request failed', error)
    }
}

function* addTeamsSaga() {
    yield takeEvery('ADD_TEAM', addTeam);
}

export default addTeamsSaga;