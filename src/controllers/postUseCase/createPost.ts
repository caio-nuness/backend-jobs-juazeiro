import { Request, Response } from "express"

interface RequestType {
  req: Request,
  res: Response
}

const createPost = async ({ req, res }: RequestType) => {
  try {
    res.send("create")
  } catch (e) {
    console.error(e)
  }
}

export default createPost