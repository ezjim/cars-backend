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
        name: 'FEAR',   
        type: 'thriller',
        img: './assets/fear.jpeg',
        year: '1996',
        rating: 'R',
        fresh: 'True',
    //or rotten depends on 
    },
    {
        name: 'Boogie Nights',   
        type: 'drama',
        img: './assets/boogieNights.jpeg',
        year: '1997',
        rating: 'R',
        fresh: 'True',
    },
    {
        name: 'Four Brothers',   
        type: 'action',
        img: './assets/fourBrothers.jpeg',
        year: '2005',
        rating: 'R',
        fresh: 'Rotten',
    },
    {
        name: 'The Departed',   
        type: 'drama',
        img: './assets/theDeparted.jpeg',
        year: '2006',
        rating: 'R',
        fresh: 'True',
    },
    {
        name: 'Ted',   
        type: 'comedy',
        img: './assets/ted.jpeg',
        year: '2012',
        rating: 'R',
        fresh: 'True',
    },
    {
        name: 'Daddys Home',   
        type: 'comedy',
        img: './assets/daddysHome.jpeg',
        year: '2015',
        ratin: 'R',
        fresh: 'false',
    },
    {
        name: 'The Figher',   
        type: 'drama',
        img: './assets/theFighter.jpeg',
        year: '2010',
        rating: 'R',
        fresh: 'True',
    },
    {
        name: 'Other Guys',   
        type: 'comedy',
        img: './assets/otherGuys.jpeg',
        year: '2010',
        rating: 'R',
        fresh: 'True',
    }];

