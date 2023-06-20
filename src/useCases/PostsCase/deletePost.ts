import { requestTypes } from "../../types"

export function deletePost({req, res}: requestTypes){
  return res.json({"delete":"delete"})
}