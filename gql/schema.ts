export const typeDefs = `#graphql
    type Character {
        id: Int!
        name: String!
        status: String!
        species: String!
        type: String!
        gender: String!
        origin: String!
        location: String!
        image: String!
        episode: [String!]!
        created: String!
    }

    type Query {
    character(id: ID!): Character
    charactersByIds(ids: [ID!]!): [Character] 
} 
`;
