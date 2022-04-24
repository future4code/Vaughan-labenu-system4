import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getDocentes =async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {
        const resultado = await connection("Docente")

        if(!resultado){
            errorCode = 404
            throw new Error("Ainda não existem docentes cadastrados")
        }

        res.status(200).send(resultado)

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}