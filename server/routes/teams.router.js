const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "teams" GROUP BY "id" ORDER BY "name";`
    pool.query(queryText)
        .then((results) => {res.send(results.rows)})
        .catch(error => {
            console.log('error in GET teams', error)
            res.sendStatus(500);
        });
});

router.get('/details/:id', rejectUnauthenticated, (req, res) => {
    let detailsId = req.params.id
    console.log(detailsId);
    const queryText = `SELECT * FROM "teams" WHERE "teams".id = $1 GROUP BY "teams".id`
    pool.query(queryText, [detailsId])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('error in GET teams details', error)
            res.sendStatus(500);
        });
});

router.get('/edit/:id', rejectUnauthenticated, (req, res) => {
    let detailsId = req.params.id
    console.log(detailsId);
    const queryText = `SELECT * FROM "teams" WHERE "teams".id = $1 GROUP BY "teams".id`
    pool.query(queryText, [detailsId])
        .then(results => res.send(results.rows))
            .catch(error => {
                console.log('error in GET edit teams details', error)
                res.sendStatus(500);
            });
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    let newTeamDetails = req.body;
    const queryText = `INSERT INTO "teams" ("name", "contact", "email", "phone_number") VALUES ($1, $2, $3, $4)`;
    const queryValues = [
        newTeamDetails.name,
        newTeamDetails.contact,
        newTeamDetails.email,
        newTeamDetails.phoneNumber,
    ];
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error in add teams POST', error);
        })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    let deleteId = req.params.id
    const queryText = `DELETE FROM "teams" WHERE "teams".id = $1`
    pool.query(queryText, [deleteId])
        .then(() => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(error);
        })
});

router.put('/details/:id', rejectUnauthenticated, (req, res) => {
    let updateTeamDetails = req.body
    console.log('PUT req.params', req.body)
    const queryText = `UPDATE "teams" SET "name" = $1, "contact" = $2, "email" = $3, "phone_number" = $4 WHERE "id" = $5;`
    const queryValues = [
        updateTeamDetails.name,
        updateTeamDetails.contact,
        updateTeamDetails.email,
        updateTeamDetails.phone_number,
        updateTeamDetails.id
    ];
    console.log(queryValues);
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error in add teams POST', error);
        })
});

module.exports = router;