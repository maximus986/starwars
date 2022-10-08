import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StarWarResource } from './starWarResource';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getStarWarResources: builder.query<StarWarResource, void>({
      query: () => `/`,
    }),
  }),
});

export const { useGetStarWarResourcesQuery } = starWarsApi;
