import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FilmModel } from './films/filmModel';
import { normalizeFilms } from './films/normalizeFilms';
import { normalizePeople } from './people/normalizePeople';
import { PeopleModel } from './people/peopleModel';
import { normalizePlanets } from './planets/normalizePlanets';
import { PlanetModel } from './planets/planetModel';
import { normalizeSpecies } from './species/normalizeSpecies';
import { SpeciesModel } from './species/speciesModel';
import { normalizeStarships } from './starships/normalizeVehicles';
import { StarshipModel } from './starships/starshipModel';
import { StarWarResourceDto, StarWarResourceType } from './starWarResource';
import { normalizeVehicles } from './vehicles/normalizeVehicles';
import { VehicleModel } from './vehicles/vehicleModel';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  tagTypes: [
    'StarWarsResources',
    'StarWarsResourcesPeople',
    'StarWarsResourcesPlanets',
    'StarWarsResourcesFilms',
    'StarWarsResourcesSpecies',
    'StarWarsResourcesVehicles',
    'StarWarsResourcesStarship',
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
    getStarWarVehicles: builder.query<VehicleModel, { pageNumber: number }>({
      query: (body) => `/vehicles?page=${body.pageNumber}`,
      transformResponse: normalizeVehicles,
      providesTags: ['StarWarsResourcesVehicles'],
    }),
    getStarWarStarships: builder.query<StarshipModel, { pageNumber: number }>({
      query: (body) => `/starships?page=${body.pageNumber}`,
      transformResponse: normalizeStarships,
      providesTags: ['StarWarsResourcesStarship'],
    }),
  }),
});

export const {
  useGetStarWarResourcesQuery,
  useGetStarWarPeopleQuery,
  useGetStarWarPlanetsQuery,
  useGetStarWarFilmsQuery,
  useGetStarWarSpeciesQuery,
  useGetStarWarVehiclesQuery,
  useGetStarWarStarshipsQuery,
  usePrefetch,
} = starWarsApi;
