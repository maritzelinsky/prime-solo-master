const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', rejectUnauthenticated, (req, res) => {
    newTimeSlot = req.body;
    const queryText = `INSERT INTO "time_slots" ("date", "start_time", "end_time") VALUES ($1, $2, $3);`;
    const queryValues = [
        newTimeSlot.date,
        newTimeSlot.start_time,
        newTimeSlot.end_time,
    ];
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error);
        })
});

module.exports = router;