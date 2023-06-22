import { Request, Response } from "express"

interface RequestType {
  req: Request,
  res: Response
}

const updatePost = ({ req, res }: RequestType) => {
  res.send("Post atualizado")
}

export default updatePost