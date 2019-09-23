const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT "time_slots".id, "time_slots".date, CONCAT ("time_slots".date,':', "time_slots".start_time) AS "start", CONCAT ("time_slots".date, ';', "time_slots".end_time) AS "end" FROM "time_slots"
GROUP BY "time_slots".id;`
    pool.query(queryText)
        .then((results) => { res.send(results.rows) })
        .catch(error => {
            console.log('error in GET teams', error)
            res.sendStatus(500);
        });
});

router.post('/', rejectUnauthenticated, (req, res) => {
    let newTimeSlot = req.body;
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

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    let deleteId = req.params.id
    console.log(req.params.id)
    console.log(deleteId)
    const queryText = `DELETE FROM "time_slots" WHERE "time_slots".id = $1`
    pool.query(queryText, [deleteId])
        .then(() => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(error);
        })
});

module.exports = router;