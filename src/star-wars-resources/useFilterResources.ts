import { useCallback, useState } from 'react';
import { StarWarResourceType } from '../api';

export const useFilterResources = (
  starWarsResources: StarWarResourceType[]
) => {
  const [filteredStarWarsResources, setFilteredStarWarsResources] =
    useState<StarWarResourceType[]>(starWarsResources);

  const handleFilterResources = useCallback(
    (filter: StarWarResourceType) => {
      const filteredResources = starWarsResources.filter(
        (resource) => resource === filter
      );

      setFilteredStarWarsResources(filteredResources);
    },
    [starWarsResources]
  );

  const handleFilterReset = useCallback(() => {
    setFilteredStarWarsResources(starWarsResources);
  }, [starWarsResources]);

  return {
    handleFilterResources,
    handleFilterReset,
    filteredStarWarsResources,
  };
};
