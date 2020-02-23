// CREATE TABLE cats (
    //     id SERIAL PRIMARY KEY NOT NULL,
//     name VARCHAR(256) NOT NULL,
//     type VARCHAR(256) NOT NULL,
//     url VARCHAR(256) NOT NULL,
//     year INTEGER NOT NULL,
//     lives INTEGER NOT NULL,
//     is_sidekick BOOLEAN NOT NULL
// );

// INSERT INTO cats (name, type, url, year, rating, is_fresh)
// VALUES ('FEAR', 'jellicle', 'www.placekitten.com/300/300', 1987, 2, true);

// 1 name
// 2 type
// 3 IMG URL
// 4 year
// 5 rating
// rottentomatoes > 30% true or false
module.exports = [
    {
        id: 1,
        name: 'FEAR',   
        type: 'thriller',
        img: 0,
        year: '1996',
        rating: 'R',
        fresh: 'true',
    },
    {
        id: 2,
        name: 'Boogie Nights',   
        type: 'drama',
        img: 0,
        year: '1997',
        rating: 'R',
        fresh: 'true',
    },
    {
        id: 3,
        name: 'Four Brothers',   
        type: 'action',
        img: 0,
        year: '2005',
        rating: 'R',
        fresh: 'false',
    },
    {
        id: 4,
        name: 'The Departed',   
        type: 'drama',
        img: 0,
        year: '2006',
        rating: 'R',
        fresh: 'true',
    },
    {
        id: 5,
        name: 'Ted',   
        type: 'comedy',
        img: 0,
        year: '2012',
        rating: 'R',
        fresh: 'true',
    },
    {
        id: 6,
        name: 'Daddys Home',   
        type: 'comedy',
        img: 0,
        year: '2015',
        rating: 'R',
        fresh: 'false',
    },
    {
        id: 7,
        name: 'The Figher',   
        type: 'drama',
        img: 0,
        year: '2010',
        rating: 'R',
        fresh: 'true',
    },
    {
        id: 8,
        name: 'Other Guys',   
        type: 'comedy',
        img: 0,
        year: '2010',
        rating: 'R',
        fresh: 'true',
    }];

