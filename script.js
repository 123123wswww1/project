"use sctrict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

console.log(numberOfFilms);

 const personalModaleDB = {
    count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     private: false
 };
 
const a = prompt("Сколько фильмов вы уже посмотрели?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Сколько фильмов вы уже посмотрели?", ""),
      d = prompt("На сколько оцените его?", "");
    
    
personalModaleDB.movies[a] = b;
personalModaleDB.movies[c] = d;


console.log(personalModaleDB);