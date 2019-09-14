import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* teamDetailsSaga() {
    yield takeEvery('FETCH_DETAILS_TO_EDIT', fetchTeamDetailsEdit);
}

function* fetchTeamDetailsEdit(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get(`/api/teams/edit/${action.payload}`, config);
        console.log('action.payload in editTeamDetailsSaga:', action.payload);
        yield put({ type: 'SET_DETAILS_TO_EDIT', payload: response.data });
    } catch (error) {
        console.log('TeamDetails get request failed', error);
    }
}



export default teamDetailsSaga;