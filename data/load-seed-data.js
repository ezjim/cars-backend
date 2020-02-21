equire('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:

//check this line out forsure.
// const data = require('../data/data.js');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();
    
        // "Promise all" does a parallel execution of async tasks
        await Promise.all(
            // map every item in the array data
            data.map(item => {
///now im not sure if we aractually pulling data from local or if it is working

                // Use a "parameterized query" to insert the data,
                // Don't forget to "return" the client.query promise!
                
            })
        );

        console.log('seed data load complete');
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.end();
    }
    
}