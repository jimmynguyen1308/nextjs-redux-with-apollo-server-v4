import { gql } from "@apollo/client"

const GET_BOOKS = gql`
  query GetAllBooks {
    getBooks {
      id
      name
      year
      author
      description
    }
  }
`

const GET_BOOKS_BY_AUTHOR = gql`
  query GetBooksByAuthor($author: String!) {
    getBooksByAuthor(author: $author) {
      id
      name
      year
      description
    }
  }
`

const GET_AUTHORS = gql`
  query GetAllAuthors {
    getAuthors {
      id
      name
      gender
      nationality
      description
    }
  }
`

const GET_AUTHOR_DESCRIPTION = gql`
  query GetAuthorDescription($name: String!) {
    getAuthorByName(name: $name) {
      description
    }
  }
`

export const queryUtils = {
  GET_BOOKS,
  GET_BOOKS_BY_AUTHOR,
  GET_AUTHORS,
  GET_AUTHOR_DESCRIPTION,
}
