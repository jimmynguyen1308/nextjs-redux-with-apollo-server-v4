import _ from "lodash"
import { relativeDataPath, JsonDataFileName } from "@/constants/data.const"
import { AuthorTypes } from "@/types/author.types"
import { fileUtils } from "@/utils/file.utils"

export const addAuthor = (__: any, args: AuthorTypes) => {
  const filePath = fileUtils.filePath(relativeDataPath, JsonDataFileName.AUTHOR)
  const fileData = fileUtils.fileData(filePath)
  fileData.push({
    id: "aut" + (fileData.length + 1).toString(),
    name: args.name,
    gender: args.gender,
    nationality: args.nationality,
    description: args.description,
  })
  return fileUtils.saveData(filePath, fileData)
}
