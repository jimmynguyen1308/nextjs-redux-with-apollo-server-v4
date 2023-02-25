import { useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { print } from "graphql"
import Menu from "@/components/Menu"
import BookCard from "@/components/BookCard"
import { getBooks, getBooksById, isNoBookData } from "@/store/bookSlice"
import useBookController from "@/hooks/useBookController"
import { BookTypes } from "@/types/book.types"
import { queryUtils } from "@/utils/query.utils"
import styles from "@/styles/Home.module.scss"

interface BooksPageProps {
  books: Array<BookTypes>
}

export default function BooksPage(props: BooksPageProps) {
  const { books } = props
  const { fetchBooks } = useBookController()
  const allBooks = useSelector(getBooks)
  const booksById = useSelector(getBooksById)
  const isEmpty = useSelector(isNoBookData)

  useEffect(() => {
    fetchBooks(books)
  }, [])

  return (
    <main className={styles.main}>
      <h1>Books</h1>
      <Menu />
      <h2>Method 1: Print using "allBooks"</h2>
      {!isEmpty &&
        allBooks.map((book: BookTypes, index: number) => {
          return <BookCard key={index} book={book} />
        })}

      <br />
      <h2>Method 2: Print using "booksById"</h2>
      {!isEmpty &&
        Object.keys(booksById).map((props: string, index: number) => (
          <BookCard key={index} book={booksById[props]} />
        ))}
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
