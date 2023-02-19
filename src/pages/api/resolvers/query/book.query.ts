import _ from "lodash"
import { relativeDataPath, JsonDataFileName } from "@/constants/data.const"
import { BookTypes } from "@/types/book.types"
import { fileUtils } from "@/utils/file.utils"

const filePath = fileUtils.filePath(relativeDataPath, JsonDataFileName.BOOK)

const books = fileUtils.fileData(filePath)

export const getBooks = () => books

export const getBooksByAuthor = (__: any, args: BookTypes) =>
  _.filter(books, (book) => book.author === args.author)
