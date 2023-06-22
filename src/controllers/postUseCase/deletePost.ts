import { Request, Response } from "express"

interface RequestType {
  req: Request,
  res: Response
}

const deletePost = ({ req, res }: RequestType) => {
  res.send("Post deleteado")
}

export default deletePost