import { useMemo } from 'react';
import { StarWarResourceType, usePrefetch } from '../api';

export const usePrefetchResources = (resource: StarWarResourceType) => {
  const prefetchPeople = usePrefetch('getStarWarPeople');
  const prefetchPlanets = usePrefetch('getStarWarPlanets');
  const prefetchFilms = usePrefetch('getStarWarFilms');
  const prefetchSpecies = usePrefetch('getStarWarSpecies');
  const prefetchVehicles = usePrefetch('getStarWarVehicles');
  const prefetchStarships = usePrefetch('getStarWarStarships');

  const resourcePrefetchMap: Record<StarWarResourceType, () => void> = useMemo(
    () => ({
      people: () => prefetchPeople({ pageNumber: 1 }),
      films: () => prefetchFilms(),
      planets: () => prefetchPlanets({ pageNumber: 1 }),
      species: () => prefetchSpecies({ pageNumber: 1 }),
      starships: () => prefetchStarships({ pageNumber: 1 }),
      vehicles: () => prefetchVehicles({ pageNumber: 1 }),
    }),
    [
      prefetchPeople,
      prefetchPlanets,
      prefetchFilms,
      prefetchSpecies,
      prefetchVehicles,
      prefetchStarships,
    ]
  );

  return resourcePrefetchMap[resource];
};
