import { SpeciesDto } from './speciesDto';
import { SpeciesModel } from './speciesModel';

export const normalizeSpecies = (species: SpeciesDto): SpeciesModel => {
  return {
    next: species.next,
    previous: species.previous,
    count: species.count,
    species:
      species.results.map((singleSpecies) => ({
        classification: singleSpecies.classification,
        designation: singleSpecies.designation,
        language: singleSpecies.language,
        name: singleSpecies.name,
      })) ?? [],
  };
};
