import dotenv from "dotenv"
import express from "express"
import userRoutes from "./routes/userRouter"
dotenv.config()

const expApp=express()

expApp.use(express.json())

expApp.use('/users',userRoutes)




export default expApp