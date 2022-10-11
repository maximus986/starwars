export interface PeopleModel {
  people: Person[];
  count: number;
  next: string | null;
  previous: string | null;
}

interface Person {
  name: string;
  hairColor: string;
  height: string;
  mass: string;
}
