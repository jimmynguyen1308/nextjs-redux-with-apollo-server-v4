import { relativeDataPath, JsonDataFileName } from "@/constants/data.const"
import { AuthorTypes } from "@/types/author.types"
import { fileUtils } from "@/utils/file.utils"

const filePath = fileUtils.filePath(relativeDataPath, JsonDataFileName.AUTHOR)

const authors = fileUtils.fileData(filePath)

export const getAuthors = () => authors

export const getAuthorByName = (_: any, args: AuthorTypes) =>
  authors.filter((author: AuthorTypes) => author.name === args.name)
