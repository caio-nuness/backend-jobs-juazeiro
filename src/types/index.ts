import { Request, Response } from "express"

interface requestTypes  {
  req: Request,
  res: Response,
  params: Request
  id: Request
}

export { requestTypes }