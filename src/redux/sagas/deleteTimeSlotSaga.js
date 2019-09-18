import axios from 'axios';
import { put, takeEvery} from 'redux-saga/effects';

function* deleteTimeSlot(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        console.log('DELETE TIME SLOT SAGA', action.payload)
        yield axios.delete(`api/timeslots/${action.payload}`, config);
        yield put({
            type: 'FETCH_TIME_SLOTS'
        })
    } catch (error) {
        console.log('delete time slot request failed', error)
    }
}

function* deleteTimeSlotSaga() {
    yield takeEvery('DELETE_TIME_SLOT', deleteTimeSlot);
}

export default deleteTimeSlotSaga;