import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { normalizePeople } from './people/normalizePeople';
import { PeopleModel } from './people/peopleModel';
import { StarWarResourceDto, StarWarResourceType } from './starWarResource';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  tagTypes: ['StarWarsResources', 'StarWarsResourcesPeople'],
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
      providesTags: ['StarWarsResources'],
    }),
    getStarWarPeople: builder.query<PeopleModel, { pageNumber: number }>({
      query: (body) => `/people?page=${body.pageNumber}`,
      transformResponse: normalizePeople,
      providesTags: ['StarWarsResourcesPeople'],
    }),
  }),
});

export const {
  useGetStarWarResourcesQuery,
  useGetStarWarPeopleQuery,
  usePrefetch,
} = starWarsApi;
