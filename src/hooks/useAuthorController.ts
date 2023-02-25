import { useDispatch } from "react-redux"
import { authorSliceActions } from "@/store/authorSlice"
import { AuthorTypes } from "@/types/author.types"

const useAuthorController = () => {
  const dispatch = useDispatch()
  const fetchAuthors = (authors: Array<AuthorTypes>) => {
    dispatch(authorSliceActions.addAuthors(authors))
  }

  return {
    fetchAuthors,
  }
}

export default useAuthorController
