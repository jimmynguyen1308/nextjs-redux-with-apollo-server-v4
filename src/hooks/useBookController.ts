import { useDispatch } from "react-redux"
import { bookSliceActions } from "@/store/bookSlice"
import { BookTypes } from "@/types/book.types"

const useBookController = () => {
  const dispatch = useDispatch()
  const fetchBooks = (books: Array<BookTypes>) => {
    dispatch(bookSliceActions.addBooks(books))
  }

  return {
    fetchBooks,
  }
}

export default useBookController
