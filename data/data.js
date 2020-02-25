// CREATE TABLE cats (
//     IAL PRIMARY KEY NOT NULL,
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
module.exports = [{

    name: 'FEAR',
    type: 'thriller',
    url: 'https://img.moviepostershop.com/fear-movie-poster-1996-1020209188.jpg',
    year: '1996',
    rating: 'R',
    fresh: 'true',
},
{

    name: 'Boogie Nights',
    type: 'drama',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51UUpxhXNQL._AC_.jpg',
    year: '1997',
    rating: 'R',
    fresh: 'true',
},
{

    name: 'Four Brothers',
    type: 'action',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51918o0ijbL._AC_.jpg',
    year: '2005',
    rating: 'R',
    fresh: 'false',
},
{

    name: 'The Departed',
    type: 'drama',
    url: 'https://i.pinimg.com/originals/49/f4/04/49f40426a15245fcbf458e1787af16c6.jpg',
    year: '2006',
    rating: 'R',
    fresh: 'true',
},
{

    name: 'Ted',
    type: 'comedy',
    url: 'https://images-na.ssl-images-amazon.com/images/I/61hYEm-udhL._AC_SY879_.jpg',
    year: '2012',
    rating: 'R',
    fresh: 'true',
},
{

    name: 'Daddys Home',
    type: 'comedy',
    url: 'https://m.media-amazon.com/images/M/MV5BMTQ0OTE1MTk4N15BMl5BanBnXkFtZTgwMDM5OTk5NjE@._V1_.jpg',
    year: '2015',
    rating: 'R',
    fresh: 'false',
},
{

    name: 'The Figher',
    type: 'drama',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51ok-STZZ0L._AC_.jpg',
    year: '2010',
    rating: 'R',
    fresh: 'true',
},
{

    name: 'Other Guys',
    type: 'comedy',
    url: 'https://images-na.ssl-images-amazon.com/images/I/513CtTKWNvL._AC_.jpg',
    year: '2010',
    rating: 'R',
    fresh: 'true',
}
];