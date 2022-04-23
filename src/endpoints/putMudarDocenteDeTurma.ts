import { Request, Response } from "express";
import { connection } from "../data/connection";

export const putMudarDocenteDeTurma =async (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const docenteId: string = req.params.docenteId

        const turmaId: string = req.body.turmaId

        const docente = await connection("Docente")
            .where({id: docenteId})

        const turma = await connection("Turma")
            .where({id: turmaId})

        if(docente.length === 0 || turma.length === 0) {
            errorCode = 404
            throw new Error("Docente ou turma não encontrados")
        }

        if(!turmaId){
            errorCode = 422
            throw new Error("Id do docente não enviado")
        } else if(!docenteId) {
            errorCode = 422
            throw new Error("Id da turma não enviado")
        }

        await connection("Docente")
            .update({ turma_id: turmaId })
            .where({ id: docenteId })

        res.status(200).send("Turma alterada")

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}