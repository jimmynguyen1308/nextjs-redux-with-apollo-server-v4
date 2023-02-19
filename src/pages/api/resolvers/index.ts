// Queries
import { getBooks, getBooksByAuthor } from "./query/book.query"
import { getAuthors, getAuthorByName } from "./query/author.query"

// Mutations
import { addBook } from "./mutation/book.mutation"
import { addAuthor } from "./mutation/author.mutation"

export const resolvers = {
  Query: {
    // Book queries
    getBooks,
    getBooksByAuthor,

    // Author queries
    getAuthors,
    getAuthorByName,
  },
  Mutation: {
    // Book mutations
    addBook,

    // Author mutations
    addAuthor,
  },
}
