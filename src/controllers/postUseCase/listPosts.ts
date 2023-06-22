import { Request, Response } from "express"

import prisma from "../../models"

interface RequestType {
  req: Request,
  res: Response
}

const listPosts = async ({ req, res }: RequestType) => {
  const posts = await prisma.posts.findMany({})
  res.json(posts)
}

export default listPosts