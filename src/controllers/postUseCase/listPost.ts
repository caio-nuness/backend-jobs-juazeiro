import { Request, Response } from "express"

interface RequestType {
  req: Request,
  res: Response
}

const listPost = ({ req, res }: RequestType) => {
  res.send("post listado")
}

export default listPost