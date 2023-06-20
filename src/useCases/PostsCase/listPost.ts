import { Request, Response } from "express"

export function listAllPosts(req: Request, res: Response){
  return res.send("listar todos os posts")
}

export function listPost(req: Request, res: Response){
  const post = req.params.id
  return res.send(post)
}