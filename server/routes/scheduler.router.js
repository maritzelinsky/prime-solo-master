const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router(); router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = ` SELECT "time_slots".id, array_agg("teams".id) AS "team_id", "time_slots".date, "time_slots".start_time, "time_slots".end_time, array_agg("teams".name) AS "name"
FROM "time_slots"
LEFT OUTER JOIN "time_slots_teams" ON "time_slots".id = "time_slots_teams".time_slot_id
LEFT OUTER JOIN "teams" ON "teams".id = "time_slots_teams".team_id
GROUP BY "time_slots".id;`
    pool.query(queryText)
        .then((results) => { res.send(results.rows) })
        .catch(error => {
            console.log('error in GET scheduler', error)
            res.sendStatus(500);
        });
});

module.exports = router;