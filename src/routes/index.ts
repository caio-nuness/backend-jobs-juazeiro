import { Router } from "express"

import  createAdmin from "../controllers/adminUseCase/createAdmin"
import listPost from "../controllers/postUseCase/listPost"
import listPosts from "../controllers/postUseCase/listPosts"
import createPost from "../controllers/postUseCase/createPost"
import updatePost from "../controllers/postUseCase/updatePost"
import deletePost from "../controllers/postUseCase/deletePost"

const router = Router()

router.get("/api/posts/:id", listPost)
router.get("/api/posts", listPosts)
router.post("/api/posts", createPost)
router.put("/api/posts/:id", updatePost)
router.delete("/api/posts/:id", deletePost)

router.post("/api/admin/create", createAdmin) // atenthicate


export default router