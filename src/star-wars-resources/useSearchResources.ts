import { useCallback, useState } from 'react';
import { StarWarResourceType } from '../api';

export const useSearchResources = (
  starWarsResources: StarWarResourceType[]
) => {
  const [searchedStarWarsResources, setSearchedStarWarsResources] =
    useState<StarWarResourceType[]>(starWarsResources);

  const handleSearchResources = useCallback(
    (searchQuery: string) => {
      const filteredResources = starWarsResources.filter((resource) =>
        resource.includes(searchQuery)
      );

      setSearchedStarWarsResources(filteredResources);
    },
    [starWarsResources]
  );

  const handleSearchReset = useCallback(() => {
    setSearchedStarWarsResources(starWarsResources);
  }, [starWarsResources]);

  return {
    handleSearchResources,
    handleSearchReset,
    searchedStarWarsResources,
  };
};
