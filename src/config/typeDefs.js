// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

export default typeDefs;