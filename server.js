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
app.use(express.json());
app.use(express.urlendcoded({ extended: true }));
// API Routes
//FULL LIST OF MOVIES
app.get('/data', async(req, res) => {
    try {
        const result = await client.query(`
            SELECT * FROM movies;
              
                `);
        console.log(result.rows);

        res.json(result.rows);
    } catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }
});


// movie and types tables           are our tables jointed???///////////
app.get('/data/:moviesId', async (req, res) => {
    try {
        const result = await client.query(`
        SELECT *
        FROM movies
        WHERE movies.id=$1`,
            // SELECT movies.*, types.name AS type
            // FROM movies 
            // JOIN types
            // ON movies.type = types.id;`);
            [req.params.moviesId]);
        res.json(result.rows);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});
// types route   is this not working because tables are not joined /data/types in url
app.get('/data/types', async (req, res) => {
    try {
        const result = await client.query(`SELECT * FROM types ORDER by name;`);

        res.json(result.rows);
    } catch (err) {
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
            fresh = '${req.body.fresh}' 
            WHERE id = ${req.body.id};
        `, );

        res.json(result.rows[0]); // return just the first result of our query
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

//POST to the movies table
app.post('/data', async (req, res) => {
    try {
        console.log(req.body);

        const result = await client.query(`
        INSERT INTO movies (name, type, img, year, rating, fresh)
                    VALUES ($1, $2, $3, $4, $5, $6);
                        RETURNING *; 
                        `,
            [res.body.name, res.body.type, res.body.img, res.body.year, res.body.rating, res.body.fresh]
        );


        res.json(result.rows[0]); // return just the first result of our query
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

// DELETE 
app.delete('/data/:movieId', async (req, res) => {
    try {
        const result = await client.query(`
        DELETE FROM movies where id = ${req.params.movieId} 
        `);
        res.json(result.rows);
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

// 404 catch all
// app.get('*', (req, res) => res.send('404 error!!'));


// module.exports = { app, };


// SELECT m.*,
// m.type as type
// from movies m
// join types t
// on m.type = t.type
// order by m.id`,