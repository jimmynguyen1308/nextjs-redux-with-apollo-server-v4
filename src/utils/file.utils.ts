import _ from "lodash"
import path from "path"
import * as fs from "fs"

const filePath = (relativePath: string | null, fileName: string): string => {
  return _.isNil(relativePath)
    ? path.join(process.cwd(), fileName)
    : path.join(process.cwd(), relativePath, fileName)
}

const fileData = (filePath: string) => {
  return _.isNil(filePath)
    ? null
    : JSON.parse(fs.readFileSync(filePath, "utf-8"))
}

const saveData = (filePath: string, data: any) => {
  if (!filePath || !data)
    return {
      status: 400,
      message: "Bad request",
    }
  fs.writeFileSync(filePath, JSON.stringify(data), "utf-8")
  return {
    status: 200,
    message: "Successfully saved data",
  }
}

export const fileUtils = {
  filePath,
  fileData,
  saveData,
}
