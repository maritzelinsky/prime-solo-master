import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

function* updateTeamDetails(action) {
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        console.log('action.payload in updateTeamSaga:', action.payload);
        yield axios.put(`/api/teams/details/${action.payload.id}`, action.payload, config)


    } catch (error) {
        console.log('error in updateTeamSaga', error);
    }
}

function* updateTeamSaga() {
    yield takeEvery('UPDATE_TEAM_DETAILS', updateTeamDetails)
}

export default updateTeamSaga;