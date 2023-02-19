import _ from "lodash"
import { relativeDataPath, JsonDataFileName } from "@/constants/data.const"
import { fileUtils } from "@/utils/file.utils"

// it's recommended to import types for args, but i'm lazy
export const addBook = (__: any, args: any) => {
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
