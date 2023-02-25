import { relativeDataPath, JsonDataFileName } from "@/constants/data.const"
import { BookTypes } from "@/types/book.types"
import { fileUtils } from "@/utils/file.utils"

const filePath = fileUtils.filePath(relativeDataPath, JsonDataFileName.BOOK)

const books = fileUtils.fileData(filePath)

export const getBooks = () => books

export const getBooksByAuthor = (_: any, args: BookTypes) =>
  books.filter((book: BookTypes) => book.author === args.author)
