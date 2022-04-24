import {Request, Response} from "express";
import { Docente } from "../classes/docente";
import { connection } from "../data/connection";
import { coverterDataParaYYYYMMDD } from "../functions/coverterDataParaYYYYMMDD";

export const postCriarDocente =async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;

    try {
        const {nome, email, dataNasc, especialidades} = req.body

        const idDoDocente = String(Date.now())

        const dataFormatada = coverterDataParaYYYYMMDD(dataNasc);

        const docente: Docente = new Docente(idDoDocente, nome, email, dataFormatada, especialidades)

        if(!nome || !email || !dataNasc || !especialidades){
            errorCode = 422
            throw new Error("Um ou mais campos vazios")
        } else if(typeof nome !== 'string' || typeof email !== 'string' || typeof dataNasc !== 'string' ||
            !Array.isArray(especialidades) || especialidades.length <= 0) {
                errorCode = 422
                throw new Error("Um ou mais campos inválidos")
        }

            await connection("Docente")
                .insert({
                    id: docente.getId(),
                    nome: docente.getNome(),
                    email: docente.getEmail(),
                    data_nasc: docente.getDataNasc(),
                    turma_id: docente.getTurmaId(),
                })

            for(let i: number = 0; i < especialidades.length; i++) {

                const resultado = await connection("Especialidade")
                    .where({ nome: especialidades[i].toUpperCase() })

                await connection("Docente_Especialidade")
                    .insert({
                        id: String(Date.now()),
                        docente_id: docente.getId(),
                        especialidade_id: resultado[0].id
                    })
            }

            res.status(201).send("Docente criado")


    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}