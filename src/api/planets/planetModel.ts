export interface PlanetModel {
  planets: Planet[];
  count: number;
  next: string | null;
  previous: string | null;
}

interface Planet {
  name: string;
  population: string;
  climate: string;
  terrain: string;
}
