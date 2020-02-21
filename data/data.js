// CREATE TABLE cats (
    //     id SERIAL PRIMARY KEY NOT NULL,
//     name VARCHAR(256) NOT NULL,
//     genre VARCHAR(256) NOT NULL,
//     url VARCHAR(256) NOT NULL,
//     year INTEGER NOT NULL,
//     lives INTEGER NOT NULL,
//     is_sidekick BOOLEAN NOT NULL
// );

// INSERT INTO cats (name, genre, url, year, rating, is_fresh)
// VALUES ('FEAR', 'jellicle', 'www.placekitten.com/300/300', 1987, 2, true);

// 1 name
// 2 genre
// 3 IMG URL
// 4 year
// 5 rating
// rottentomatoes > 30% true or false
module.exports = [
    {
        name: 'FEAR',   
        genre: 'Thriller',
        img: 0,
        year: '1996',
        rating: 'R',
        fresh: 'True',
    //or rotten depends on 
    },
    {
        name: 'Boogie Nights',   
        genre: 'Drama',
        img: 0,
        year: '1997',
        rating: 'R',
        fresh: 'True',
    },
    {
        name: 'Four Brothers',   
        genre: 'Action',
        img: 0,
        year: '2005',
        rating: 'R',
        fresh: 'Rotten',
    },
    {
        name: 'The Departed',   
        genre: 'Drama',
        img: 0,
        year: '2006',
        rating: 'R',
        fresh: 'True',
    },
    {
        name: 'Ted',   
        genre: 'Comedy',
        img: 0,
        year: '2012',
        rating: 'R',
        fresh: 'True',
    },
    {
        name: 'Daddys Home',   
        genre: 'Comedy',
        img: 0,
        year: '2015',
        rating: 'R',
        fresh: 'false',
    },
    {
        name: 'The Figher',   
        genre: 'Drama',
        img: 0,
        year: '2010',
        rating: 'R',
        fresh: 'True',
    },
    {
        name: 'Other Guys',   
        genre: 'Comedy',
        img: 0,
        year: '2010',
        rating: 'R',
        fresh: 'True',
    }];

