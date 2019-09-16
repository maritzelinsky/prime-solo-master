import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchTimeSlots() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('/api/timeslots', config);
        yield put({ type: 'SET_TIME_SLOTS', payload: response.data });
    } catch (error) {
        console.log('Teams get request failed', error);
    }
}

function* timeSlotsSaga() {
    yield takeEvery('FETCH_TIME_SLOTS', fetchTimeSlots);
}

export default timeSlotsSaga;