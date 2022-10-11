import { AnyAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PeopleDto } from './people/peopleDto';
import { PeopleModel } from './people/peopleModel';
import { StarWarResourceDto, StarWarResourceType } from './starWarResource';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  tagTypes: ['StarWarsResources'],
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
      transformResponse: (response: PeopleDto) => {
        return {
          next: response.next,
          previous: response.previous,
          count: response.count,
          people: response.results.map((result) => ({
            height: result.height,
            hairColor: result.hair_color,
            name: result.name,
            mass: result.mass,
          })),
        };
      },
    }),
  }),
});

export const { useGetStarWarResourcesQuery, useGetStarWarPeopleQuery } =
  starWarsApi;
