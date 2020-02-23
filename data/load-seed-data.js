require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import our seed data:
const types = require('./types.js');
const movies = require('./data.js');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();

        // First save types and get each returned row which has
        // the id of the type. Notice use of RETURNING:
        const savedTypes = await Promise.all(
            types.map(async type => {
                const result = await client.query(`
                    INSERT INTO types (type)
                    VALUES ($1)
                    RETURNING *;
                `,
                    [type]);


                return result.rows[0];
            
            })
        );

  
        console.log(types)

        // map every item in the array
        await Promise.all(
            
            movies.map(movie => {
                // Find the corresponding type id
                // find the id of the matching cat type
                const type = savedTypes.find(type => {
                    console.log('what movie type');
                    console.log(movie); 
                    debugger;
                    return type.name === movie.type;
                });

                return client.query(`
                    INSERT INTO movies (id, name, type, img, year, rating, fresh)
                    VALUES ($1, $2, $3, $4, $5, $6, $7);
                `,
                    [movie.id, movie.name, movie.type, movie.img, movie.year, movie.rating, movie.fresh]);

            })
        );

        console.log('seed data load complete');
    }
    catch (err) {
        console.log('this is an error =====================');
        console.log(err);
    }
    finally {
        client.end();
    }

}