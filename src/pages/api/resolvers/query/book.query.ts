import _ from "lodash"
import { relativeDataPath, JsonDataFileName } from "@/constants/data.const"
import { fileUtils } from "@/utils/file.utils"

const filePath = fileUtils.filePath(relativeDataPath, JsonDataFileName.BOOK)

const books = fileUtils.fileData(filePath)

export const getBooks = () => books

// it's recommended to import types for args, but i'm lazy
export const getBooksByAuthor = (__: any, args: any) =>
  _.filter(books, (book) => book.author === args.author)
