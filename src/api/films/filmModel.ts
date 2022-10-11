export interface FilmModel {
  films: Film[];
  count: number;
  next: string | null;
  previous: string | null;
}

interface Film {
  title: string;
  director: string;
  producer: string;
  releaseDate: string;
}
