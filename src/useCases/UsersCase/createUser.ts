import { requestTypes } from "../../types"

export function createUser({req, res}: requestTypes){
  return res.json({"user":"user"})
}