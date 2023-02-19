import { useDispatch } from "react-redux"
import { bookSliceActions } from "@/store/bookSlice"

const useBookController = () => {
  const dispatch = useDispatch()
  const fetchBooks = () => {
    // dispatch(bookSliceActions.addBooks(books))
  }
}

export default useBookController
