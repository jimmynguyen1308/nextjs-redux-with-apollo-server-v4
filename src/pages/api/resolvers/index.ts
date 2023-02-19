// Queries
// import {} from "./query/book.query"
// import {} from "./query/author.query"

// Mutations
import { addBook } from "./mutation/book.mutation"
import { addAuthor } from "./mutation/author.mutation"

export const resolvers = {
  Query: {
    // Queries here
  },
  Mutation: {
    addBook,
    addAuthor,
  },
}
