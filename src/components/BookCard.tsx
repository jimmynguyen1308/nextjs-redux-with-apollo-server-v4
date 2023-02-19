import { useRouter } from "next/router"
import { BookTypes } from "@/types/book.types"
import styles from "@/styles/BookCard.module.scss"

interface BookCardProps {
  book: BookTypes
}

export default function BookCard(props: BookCardProps) {
  const { book } = props
  const router = useRouter()

  return (
    <div className={styles.book_card}>
      <h2>{book.name}</h2>
      <p>
        Published year:{" "}
        {book.year && book.year >= 0
          ? book.year.toString()
          : Math.abs(book.year!).toString() + " BC"}
      </p>
      {book.author && (
        <p>
          Author:{" "}
          <span onClick={() => router.push(`/books/${book.author}`)}>
            {book.author}
          </span>
        </p>
      )}
      <p>Description: {book.description}</p>
    </div>
  )
}
