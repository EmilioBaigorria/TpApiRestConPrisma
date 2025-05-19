
import { Request, Response } from 'express'
import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()


export const getAllUser = async (req: Request, res: Response) => {
    try {
        const response = await prisma.usuario.findMany()
        res.status(200).json(response)
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de todos los usuarios: ", error)
    }
}
export const getUserbyId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const response = await prisma.usuario.findUnique({ where: { id: id } })
        res.status(200).json(response)
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de todos los usuarios: ", error)
    }
}
export const createUser = async (req: Request, res: Response) => {
    try {
        const { nombre, email, password } = req.body
        const response = await prisma.usuario.create({
            data: {
                nombre: nombre,
                email: email,
                password: password
            }
        })
        res.status(201).json(response)
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de todos los usuarios: ", error)
    }
}
export const updateUser = async (req: Request, res: Response) => {
    try {
        const { nombre, email, password, id } = req.body
        const response = await prisma.usuario.update({
            where: { id: id },
            data: {
                nombre: nombre,
                email: email,
                password: password
            }
        })
        res.status(201).json(response)
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de todos los usuarios: ", error)
    }
}
export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const response = await prisma.usuario.delete({
            where: { id: id },
        })
        res.status(201).json(response)
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de todos los usuarios: ", error)
    }
}



