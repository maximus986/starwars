export interface PersonDto {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
  height: string;
}

export interface PeopleDto {
  results: PersonDto[];
  count: number;
  next: string | null;
  previous: string | null;
}
