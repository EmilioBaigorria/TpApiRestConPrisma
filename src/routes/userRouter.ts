import express from "express"
import { createUser, deleteUserById, getAllUser, getUserbyId, updateUser } from "../controllers/userController"

const userRouter=express.Router()



userRouter.get('/user',getAllUser)
userRouter.get('/user/:id',getUserbyId)
userRouter.post('/user',createUser)
userRouter.put('/user',updateUser)
userRouter.delete('/user/:id',deleteUserById)


export default userRouter