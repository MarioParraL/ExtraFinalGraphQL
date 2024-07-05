export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: Episode[];
  created: string;
};

export type Episode = {
  url: string;
};

export type Location = {
  name: string;
  url: string;
};
