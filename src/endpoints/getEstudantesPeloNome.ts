import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { covertDateToDDMMYYYY } from '../functions/covertDateToDDMMYYYY';

export const getEstudantesPeloNome = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try {
        const nome: string = req.query.nome as string

        if (!nome) {
            errorCode = 422
            throw new Error("Nome não enviado")
        }

        const resultado = await connection("Estudante")
            .where('nome', 'like', `%${nome}%`)

        const resultadoComDataFormatada = resultado.map((estudante) => {
            return {
                ...estudante,
                data_nasc: covertDateToDDMMYYYY(estudante.data_nasc)
            }
        })

        if (resultado.length === 0) {
            errorCode = 404
            throw new Error("Estudante não encontrado")
        }

        res.status(200).send({ estudantes: resultadoComDataFormatada })
    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}