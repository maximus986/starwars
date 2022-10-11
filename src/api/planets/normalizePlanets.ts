import { PlanetDto } from './planetDto';
import { PlanetModel } from './planetModel';

export const normalizePlanets = (planets: PlanetDto): PlanetModel => {
  return {
    next: planets.next,
    previous: planets.previous,
    count: planets.count,
    planets:
      planets.results.map((planet) => ({
        climate: planet.climate,
        name: planet.name,
        population: planet.population,
        terrain: planet.terrain,
      })) ?? [],
  };
};
