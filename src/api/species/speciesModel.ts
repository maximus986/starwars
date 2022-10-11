export interface SpeciesModel {
  species: Species[];
  count: number;
  next: string | null;
  previous: string | null;
}

interface Species {
  name: string;
  classification: string;
  designation: string;
  language: string;
}
