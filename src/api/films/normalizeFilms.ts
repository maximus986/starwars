import { FilmDto } from './filmDto';
import { FilmModel } from './filmModel';

export const normalizeFilms = (films: FilmDto): FilmModel => {
  return {
    next: films.next,
    previous: films.previous,
    count: films.count,
    films:
      films.results.map((film) => ({
        director: film.director,
        producer: film.producer,
        releaseDate: film.release_date,
        title: film.title,
      })) ?? [],
  };
};
