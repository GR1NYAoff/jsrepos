"use strict";

const personalMovieDB = {
      count: 0,
      movies: {},
      actors: {},
      genres: [],
      private: false
};

while (personalMovieDB) {

      let filmCount = prompt('Film count?', '');
      if (filmCount === null || filmCount.length == 0) {
            continue;
      }
      let filmName = prompt('Last film?', '');
      if (filmName === null || filmName.length == 0 || filmName.length >= 50) {
            continue;
      }
      let filmMark = prompt("Film's mark?", '');
      if (filmMark === null || filmMark.length == 0) {
            continue;
      }

      personalMovieDB.count = filmCount;
      personalMovieDB.movies[filmName] = filmMark;
      break;
}

if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
      alert('less user');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('classic user');
} else if (personalMovieDB.count >= 30) {
      alert('cinemaman!!!');
} else {
      alert('Error!!');
}

writeYourGeners(personalMovieDB);
showMyDB(personalMovieDB.private);

function showMyDB(hidden) {
      if (!hidden) {
            console.log(personalMovieDB);
      }
      return;
}

function writeYourGeners(movieDB) {
      let genre;
      for (let i = 0; i <= 2; i++) {
            genre = prompt(`Your favourite gener N${i + 1}?`, '');
            movieDB.genres[i] = genre;
      }
}