import axios from "axios"
import { print } from "graphql"
import Menu from "@/components/Menu"
import BookCard from "@/components/BookCard"
import { BookTypes } from "@/types/book.types"
import { queryUtils } from "@/utils/query.utils"
import styles from "@/styles/Home.module.scss"

interface BooksPageProps {
  books: Array<BookTypes>
}

export default function BooksPage(props: BooksPageProps) {
  const { books } = props

  return (
    <main className={styles.main}>
      <h1>Books</h1>
      <Menu />
      {books &&
        books.map((book: BookTypes) => {
          return <BookCard book={book} />
        })}
    </main>
  )
}

export async function getStaticProps() {
  try {
    const response = await axios.post(`${process.env.BASE_URL}/api/graphql`, {
      query: print(queryUtils.GET_BOOKS),
    })
    const data = response.data.data.getBooks
    return {
      props: {
        books: data,
      },
    }
  } catch (error) {
    console.error(error)
  }
}
