
import { Request, Response } from "express"

export function listAllUsers(req: Request, res: Response){
  return res.send("listar usuarios")
}

export function listUser(req: Request, res: Response){
  const user = req.params.id
  return res.json(user)
}