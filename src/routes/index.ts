import { Router } from "express"

// Import View All Users
import { listAllUsers } from "../useCases/UsersCase/listUser" 

// Import Views Type C R U D for Users
import { listUser } from "../useCases/UsersCase/listUser" 
import { createUser } from "../useCases/UsersCase/createUser"
import { deleteUser } from "../useCases/UsersCase/deleteUser"
import { updateUser } from "../useCases/UsersCase/updateUser"

// Import View All Posters And Categories
import { listAllPosts } from "../useCases/PostsCase/listPost"

// Import Views Type C R U D for Posts
import { listPost } from "../useCases/PostsCase/listPost"
import { createPost } from "../useCases/PostsCase/createPost"
import { updatePost } from "../useCases/PostsCase/updatePost"
import { deletePost } from "../useCases/PostsCase/deletePost"

// Import Views for Categories
import { postsSalaried } from "../useCases/CategoriesCase/Categories"
import { postsDetached } from "../useCases/CategoriesCase/Categories"
import { postsContract } from "../useCases/CategoriesCase/Categories"
import { postsDaily } from "../useCases/CategoriesCase/Categories"


const router = Router()

// Router Users
router.get("/users/:id", listUser)
router.get("/users", listAllUsers)
router.post("/users/create", createUser)
router.put("/users/update/:id", updateUser)
router.delete("/users/delete/:id", deleteUser)

// Router Posts
router.get("/posts/:id", listPost)
router.get("/posts", listAllPosts)
router.post("/posts/create", createPost)
router.put("/posts/update/:id", updatePost)
router.delete("/posts/delete/:id", deletePost)

// Router as Categories
router.get("/posts/salaried/:id", postsSalaried)
router.get("/posts/detached/:id", postsDetached)
router.get("/posts/contract/:id", postsContract)
router.get("/posts/daily/:id", postsDaily)

export default router