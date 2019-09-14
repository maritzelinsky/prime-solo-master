import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';

function* addTimeSlot(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCreditials: true,
        };

        yield axios.post('api/timeslots/', action.payload, config);
        yield put ({
            type: 'SET_TIME_SLOT'
        })
    } catch (error) {
        console.log('add time slot post request failed', error);
    }
}

function* addTimeSlotSaga() {
    yield takeEvery('ADD_TIME_SLOT', addTimeSlot);
}

export default addTimeSlotSaga;