import _ from "lodash"
import { relativeDataPath, JsonDataFileName } from "@/constants/data.const"
import { BookTypes } from "@/types/book.types"
import { fileUtils } from "@/utils/file.utils"

export const addBook = (__: any, args: BookTypes) => {
  const filePath = fileUtils.filePath(relativeDataPath, JsonDataFileName.BOOK)
  const fileData = fileUtils.fileData(filePath)
  fileData.push({
    id: "book" + (fileData.length + 1).toString(),
    name: args.name,
    year: args.year,
    author: args.author,
    description: args.description,
  })
  return fileUtils.saveData(filePath, fileData)
}
