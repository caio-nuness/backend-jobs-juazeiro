import { requestTypes } from "../../types"

export function createPost({ res }: requestTypes){
  return res.json({"create":"create"})
}