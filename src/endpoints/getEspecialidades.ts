import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getEspecialidades = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {
        const resultado = await connection("Especialidade")

        res.status(200).send(resultado)

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}

