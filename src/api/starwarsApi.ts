import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FilmModel } from './films/filmModel';
import { normalizeFilms } from './films/normalizeFilms';
import { normalizePeople } from './people/normalizePeople';
import { PeopleModel } from './people/peopleModel';
import { normalizePlanets } from './planets/normalizePlanets';
import { PlanetModel } from './planets/planetModel';
import { normalizeSpecies } from './species/normalizeSpecies';
import { SpeciesModel } from './species/speciesModel';
import { StarWarResourceDto, StarWarResourceType } from './starWarResource';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  tagTypes: [
    'StarWarsResources',
    'StarWarsResourcesPeople',
    'StarWarsResourcesPlanets',
    'StarWarsResourcesFilms',
    'StarWarsResourcesSpecies',
  ],
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
    getStarWarPlanets: builder.query<PlanetModel, { pageNumber: number }>({
      query: (body) => `/planets?page=${body.pageNumber}`,
      transformResponse: normalizePlanets,
      providesTags: ['StarWarsResourcesPlanets'],
    }),
    getStarWarFilms: builder.query<FilmModel, void>({
      query: () => `/films`,
      transformResponse: normalizeFilms,
      providesTags: ['StarWarsResourcesFilms'],
    }),
    getStarWarSpecies: builder.query<SpeciesModel, { pageNumber: number }>({
      query: (body) => `/species?page=${body.pageNumber}`,
      transformResponse: normalizeSpecies,
      providesTags: ['StarWarsResourcesSpecies'],
    }),
  }),
});

export const {
  useGetStarWarResourcesQuery,
  useGetStarWarPeopleQuery,
  useGetStarWarPlanetsQuery,
  useGetStarWarFilmsQuery,
  useGetStarWarSpeciesQuery,
  usePrefetch,
} = starWarsApi;
