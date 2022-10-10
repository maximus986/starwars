export interface StarWarResourceDto {
  [StarWarResourceType.people]: string;
  [StarWarResourceType.films]: string;
  [StarWarResourceType.planets]: string;
  [StarWarResourceType.species]: string;
  [StarWarResourceType.starships]: string;
  [StarWarResourceType.vehicles]: string;
}

export enum StarWarResourceType {
  people = 'people',
  films = 'films',
  planets = 'planets',
  species = 'species',
  starships = 'starships',
  vehicles = 'vehicles',
}
