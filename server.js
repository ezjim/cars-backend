// LOAD ENV FILES
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

console.log(process.env);
// Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

// Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev')); // http logging
app.use(cors()); // enable CORS request

// API Routes

app.get('/data', async (req, res) => {
    try {
        const result = await client.query(`
            SELECT * FROM movies;
              
                `);
        // CHECK WHAT CATS MEANS FOR WHAT VAR 
        console.log(result.rows);

        res.json(result.rows);
    } catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }
});


app.get('/data/:moviesId', async (req, res) => {
    try {
        const result = await client.query(`
            SELECT *
            FROM movies
            WHERE movies.id=$1`,
            // the second parameter is an array of values to be SANITIZED then inserted into the query
            // i only know this because of the `pg` docs
            [req.params.moviesId]);

        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});
app.put('/data', async (req, res) => {
    // using req.body instead of req.params or req.query (which belong to /GET requests)
    try {
        console.log(req.body);
        // make a new cat out of the cat that comes in req.body;
        const result = await client.query(`
            UPDATE movies
            SET name = '${req.body.name}', 
            type = '${req.body.type}'
            img = '${req.body.img}',
            year = '${req.body.year}', 
            rating = '${req.body.rating}', 
            fresh = '${req.body.fresh}', 
            WHERE id = ${req.body.id};
        `, 
        );

        res.json(result.rows[0]); // return just the first result of our query
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});




// Start the server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});