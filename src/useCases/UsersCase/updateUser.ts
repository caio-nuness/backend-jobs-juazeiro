import { requestTypes } from "../../types"

export function updateUser({req, res}: requestTypes){
  return res.json({"update":"update"})
}