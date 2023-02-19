import { useDispatch } from "react-redux"
import { authorSliceActions } from "@/store/authorSlice"

const useAuthorController = () => {
  const dispatch = useDispatch()
  const fetchAuthors = () => {
    // dispatch(authorSliceActions.addBooks(books))
  }
}

export default useAuthorController
