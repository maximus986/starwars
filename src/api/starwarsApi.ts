import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StarWarResourceDto, StarWarResourceType } from './starWarResource';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getStarWarResources: builder.query<StarWarResourceType[], void>({
      query: () => `/`,
      transformResponse: (resources: StarWarResourceDto) => {
        if (!resources) {
          return [];
        }
        return Object.keys(resources).map(
          (resource) => resource as StarWarResourceType
        );
      },
    }),
  }),
});

export const { useGetStarWarResourcesQuery } = starWarsApi;
