import { requestTypes } from "../../types"

export function deleteUser({ res }: requestTypes){
  return res.json({"delete":"delete"})
}