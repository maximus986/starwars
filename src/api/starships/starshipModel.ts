export interface StarshipModel {
  starships: Starship[];
  count: number;
  next: string | null;
  previous: string | null;
}

interface Starship {
  name: string;
  manufacturer: string;
  model: string;
  passengers: string;
}
