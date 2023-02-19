import { APIResponse } from "./APIResponse"
import { Book } from "./Book"
import { Author } from "./Author"
import { Query, Mutation } from "./Actions"

export const typeDefs = APIResponse + Book + Author + Query + Mutation
