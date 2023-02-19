export const Query = `#graphql
  type Query {
    # Books
    getBooks: [Book]
    getBooksByAuthor(author: String!): [Book]

    # Authors
    getAuthors: [Author]
    getAuthorByName(name: String!): [Author]
  }
`
export const Mutation = `#graphql
  type Mutation {
    # Books
    addBook(
      name: String!
      year: Int
      author: String!
      description: String
    ): APIResponse

    # Authors
    addAuthor(
      name: String!
      gender: Boolean!
      nationality: String
      description: String
    ): APIResponse
  }
`
