import axios from "axios"
import { GetStaticPropsContext } from "next"
import { useRouter } from "next/router"
import { print } from "graphql"
import Menu from "@/components/Menu"
import BookCard from "@/components/BookCard"
import { BookTypes } from "@/types/book.types"
import { queryUtils } from "@/utils/query.utils"
import styles from "@/styles/Home.module.scss"

interface BooksPageByAuthorProps {
  books: Array<BookTypes>
}

export default function BooksPageByAuthor(props: BooksPageByAuthorProps) {
  const { books } = props
  const router = useRouter()
  const { author } = router.query

  return (
    <main className={styles.main}>
      <h1>Author: {author}</h1>
      <Menu />
      {books &&
        books.map((book: BookTypes) => {
          return <BookCard book={book} />
        })}
    </main>
  )
}

export async function getStaticPaths() {
  try {
    const response = await axios.post("http://localhost:3000/api/graphql", {
      query: print(queryUtils.GET_AUTHORS),
    })
    const data = response.data.data.getAuthors
    const paths = data.map((book: BookTypes) => {
      return {
        params: { author: `${book.author}` },
      }
    })
    return {
      paths,
      fallback: true,
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context
  try {
    const response = await axios.post("http://localhost:3000/api/graphql", {
      query: print(queryUtils.GET_BOOKS_BY_AUTHOR),
      variables: {
        author: params!.author,
      },
    })
    const data = response.data.data.getBooksByAuthor

    if (data.length === 0)
      return {
        notFound: true,
      }

    return {
      props: {
        books: data,
      },
    }
  } catch (error) {
    console.error(error)
  }
}
