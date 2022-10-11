import { PeopleDto } from './peopleDto';
import { PeopleModel } from './peopleModel';

export const normalizePeople = (people: PeopleDto): PeopleModel => {
  return {
    next: people.next,
    previous: people.previous,
    count: people.count,
    people:
      people.results.map((person) => ({
        height: person.height,
        hairColor: person.hair_color,
        name: person.name,
        mass: person.mass,
      })) ?? [],
  };
};
