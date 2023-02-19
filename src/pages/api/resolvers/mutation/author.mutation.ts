import _ from "lodash"
import { relativeDataPath, JsonDataFileName } from "@/constants/data.const"
import { fileUtils } from "@/utils/file.utils"

// it's recommended to import types for args, but i'm lazy
export const addAuthor = (__: any, args: any) => {
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
