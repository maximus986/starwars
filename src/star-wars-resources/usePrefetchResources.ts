import { StarWarResourceType, usePrefetch } from '../api';

export const usePrefetchResources = (resource: StarWarResourceType) => {
  const prefetchPeople = usePrefetch('getStarWarPeople');

  const resourcePrefetchMap: Record<StarWarResourceType, () => void> = {
    people: () => prefetchPeople({ pageNumber: 1 }),
    films: () => prefetchPeople({ pageNumber: 1 }),
    planets: () => prefetchPeople({ pageNumber: 1 }),
    species: () => prefetchPeople({ pageNumber: 1 }),
    starships: () => prefetchPeople({ pageNumber: 1 }),
    vehicles: () => prefetchPeople({ pageNumber: 1 }),
  };

  return resourcePrefetchMap[resource];
};
