import { Request, Response } from 'express';
import { connection } from "../data/connection"

export const putMudarEstudanteDeTurma = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try {
        const estudanteId: string = req.params.estudanteId

        const turmaId: string = req.body.turmaId

        const resultado = await connection("Estudante")
            .where({ id: estudanteId })

        if (resultado.length === 0) {
            errorCode = 404
            throw new Error("Aluno não encontrado")
        }

        if (!turmaId) {
            errorCode = 422
            throw new Error("Campo vazio")
        } else if (!estudanteId) {
            errorCode = 422
            throw new Error("Id do estudante não enviado")
        }

        await connection("Estudante")
            .update({ turma_id: turmaId })
            .where({ id: estudanteId })

        res.status(200).send("Turma alterada")
    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}