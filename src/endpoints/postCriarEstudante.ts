import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Estudante } from '../classes/estudante';
import { coverterDataParaYYYYMMDD } from '../functions/coverterDataParaYYYYMMDD'

export const postCriarEstudante = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try {
        const { nome, email, dataNasc, hobbies } = req.body

        const idEstudante: string = String(Date.now())

        const dataFormatada = coverterDataParaYYYYMMDD(dataNasc)

        const estudante: Estudante = new Estudante(idEstudante, nome, email, dataFormatada, hobbies)

        if (!nome || !email || !dataNasc || !hobbies) {
            errorCode = 422
            throw new Error("Um ou mais campos vazios")
        } else if (typeof nome !== 'string' || typeof email !== 'string' || typeof dataNasc !== 'string' ||
            !Array.isArray(hobbies) || hobbies.length <= 0) {
            errorCode = 422
            throw new Error("Um ou mais campos inválidos")
        }

        await connection("Estudante")
            .insert({
                id: estudante.getId(),
                nome: estudante.getNome(),
                email: estudante.getEmail(),
                data_nasc: estudante.getDataNasc(),
                turma_id: estudante.getTurmaId()
            })

        for (let i: number = 0; i < hobbies.length; i++) {

            const resultado = await connection("Hobby")
                .where({ nome: hobbies[i] })

            if (resultado.length > 0) {

                await connection("Estudante_Hobby")
                    .insert({
                        id: String(Date.now()),
                        estudante_id: estudante.getId(),
                        hobby_id: resultado[0].id
                    })
            } else {


                const criarHobby = async () => {
                    await connection("Hobby")
                        .insert({
                            id: String(Date.now()),
                            nome: hobbies[i]
                        })
                }

                const atribuirHobbyAoEstudante = async () => {
                    const hobbyId = await connection("Hobby")
                        .where({ nome: hobbies[i] })

                    await connection("Estudante_Hobby")
                        .insert({
                            id: String(Date.now()),
                            estudante_id: estudante.getId(),
                            hobby_id: hobbyId[0].id
                        })
                }

                const main = async (): Promise<void> => {
                    try {
                        await criarHobby()
                        await atribuirHobbyAoEstudante()
                    }
                    catch (err: any) {
                        res.send(err.response?.data || err.message)
                    }
                }
                main()
            }
        }
        res.status(201).send("Estudante criado")

    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}