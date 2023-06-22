import { Request, Response } from "express"

interface RequestType {
  req: Request,
  res: Response
}

const createAdmin = ({ req, res }: RequestType) => {
  res.send("Usuario Criado")
}

export default createAdmin