import _ from "lodash"
import { relativeDataPath, JsonDataFileName } from "@/constants/data.const"
import { fileUtils } from "@/utils/file.utils"

const filePath = fileUtils.filePath(relativeDataPath, JsonDataFileName.AUTHOR)

const authors = fileUtils.fileData(filePath)

export const getAuthors = () => authors

// it's recommended to import types for args, but i'm lazy
export const getAuthorByName = (__: any, args: any) =>
  _.filter(authors, (author) => author.name === args.name)
