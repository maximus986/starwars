import { useMemo } from 'react';
import { StarWarResourceType, usePrefetch } from '../api';

export const usePrefetchResources = (resource: StarWarResourceType) => {
  const prefetchPeople = usePrefetch('getStarWarPeople');
  const prefetchPlanets = usePrefetch('getStarWarPlanets');
  const prefetchFilms = usePrefetch('getStarWarFilms');

  const resourcePrefetchMap: Record<StarWarResourceType, () => void> = useMemo(
    () => ({
      people: () => prefetchPeople({ pageNumber: 1 }),
      films: () => prefetchFilms(),
      planets: () => prefetchPlanets({ pageNumber: 1 }),
      species: () => prefetchPeople({ pageNumber: 1 }),
      starships: () => prefetchPeople({ pageNumber: 1 }),
      vehicles: () => prefetchPeople({ pageNumber: 1 }),
    }),
    [prefetchPeople, prefetchPlanets, prefetchFilms]
  );

  return resourcePrefetchMap[resource];
};