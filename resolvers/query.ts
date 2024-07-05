import { GraphQLError } from "graphql";
import { getInfoFromApi } from "../lib/apifunctions.ts";
import { getCharactersFromApi } from "../lib/apifunctions.ts";
export const Query = {
  character: async (_: unknown, args: { id: number }) => {
    try {
      const character = await getInfoFromApi(args.id);
      return character;
    } catch (error) {
      throw new GraphQLError(error);
    }
  },

  charactersByIds: async (_: unknown, args: { ids: number[] }) => {
    try {
      const characters = await getCharactersFromApi(args.ids);

      return characters.map((character) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        origin: character.origin,
        location: character.location,
        gender: character.gender,
        image: character.image,
        episode: character.episode,
        created: character.created,
      }));
    } catch (error) {
      throw new GraphQLError(error);
    }
  },
};
