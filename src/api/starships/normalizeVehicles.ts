import { StarshipDto } from './starshipDto';
import { StarshipModel } from './starshipModel';

export const normalizeStarships = (starships: StarshipDto): StarshipModel => {
  return {
    next: starships.next,
    previous: starships.previous,
    count: starships.count,
    starships:
      starships.results.map((starship) => ({
        manufacturer: starship.manufacturer,
        model: starship.model,
        name: starship.name,
        passengers: starship.passengers,
      })) ?? [],
  };
};
