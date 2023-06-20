import { requestTypes } from "../../types"

export function updatePost({ res }: requestTypes){
  return res.json({"updatePost": "post"})
}