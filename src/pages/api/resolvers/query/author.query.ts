import _ from "lodash"
import { relativeDataPath, JsonDataFileName } from "@/constants/data.const"
import { AuthorTypes } from "@/types/author.types"
import { fileUtils } from "@/utils/file.utils"

const filePath = fileUtils.filePath(relativeDataPath, JsonDataFileName.AUTHOR)

const authors = fileUtils.fileData(filePath)

export const getAuthors = () => authors

export const getAuthorByName = (__: any, args: AuthorTypes) =>
  _.filter(authors, (author) => author.name === args.name)
