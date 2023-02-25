import path from "path"
import * as fs from "fs"

const filePath = (relativePath: string | null, fileName: string): string => {
  return relativePath === null || relativePath === undefined
    ? path.join(process.cwd(), fileName)
    : path.join(process.cwd(), relativePath, fileName)
}

const fileData = (filePath: string | null) => {
  return filePath === null || filePath === undefined
    ? null
    : JSON.parse(fs.readFileSync(filePath, "utf-8"))
}

const saveData = (filePath: string | null, data: any) => {
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
