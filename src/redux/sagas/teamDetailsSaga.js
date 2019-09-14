import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchTeamDetails(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get(`/api/teams/details/${action.payload}`, config);
        console.log('action.payload in fetchTeamDetailsSaga:', action.payload);
        yield put({ type: 'SET_DETAILS', payload: response.data });
        console.log('TEAM DETAILS SAGA', response.data)
    } catch (error) {
        console.log('TeamDetails get request failed', error);
    }
}

function* teamDetailsSaga() {
    yield takeEvery('FETCH_DETAILS', fetchTeamDetails);
}

export default teamDetailsSaga;