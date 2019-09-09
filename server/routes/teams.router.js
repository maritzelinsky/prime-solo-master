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
        }))
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;