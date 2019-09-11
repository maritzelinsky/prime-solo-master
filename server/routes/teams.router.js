const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = 'SELECT * FROM "teams"'
    pool.query(queryText)
        .then(results => res.send(results.rows)
        .catch(error => {
            console.log('error in GET teams', error)
            res.sendStatus(500);
        }));
});

// router.get('/details/:id', rejectUnauthenticated, (req, res) => {
//     let detailsId = req.params.id
//     console.log(detailsId);
//     const queryText = `SELECT "teams".name, "teams".contact, "teams".email, "teams".phone_number FROM "teams" WHERE "teams".id = $1;`
//     pool.query(queryText, [detailsId])
//         .then(results => res.send(results.rows[0])
//         .catch(error => {
//             console.log('error in GET teams details', error)
//             res.sendStatus(500);
//         }));
// });

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;