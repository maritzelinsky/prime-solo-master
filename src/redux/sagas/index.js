import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import teamsSaga from './teamsSaga';
import teamDetailsSaga from './teamDetailsSaga';
import editTeamDetailsSaga from './editTeamsDetailsSaga';
import addTeamSaga from './addTeamSaga';
import addTimeSlotSaga from './addTimeSlotSaga';
import deleteTeamSaga from './deleteTeamSaga';
import timeSlotsSaga from './timeSlotsSaga';
import schedulerSaga from './schedulerSaga';
import assignTeamSaga from './assignTeamsSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    teamsSaga(),
    teamDetailsSaga(),
    editTeamDetailsSaga(),
    addTeamSaga(),
    addTimeSlotSaga(),
    deleteTeamSaga(),
    timeSlotsSaga(),
    schedulerSaga(),
    assignTeamSaga(),
  ]);
}
