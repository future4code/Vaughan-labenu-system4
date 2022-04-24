import { Request, Response } from "express";
import { connection } from "../data/connection";


export async function getTodosMesmaTurma (req: Request, res: Response) {

   
   const { id } = req.query;
   let errorCode = 400

   try {
         if (!id) {
            errorCode = 422
             throw new Error("Informe o campo id!");
         } 
            const docente = await connection('Docente')
            .select('id','nome')
            .where('turma_id','=', !!id)
            
            const estudante = await connection('Estudante')
            .select('id','nome')
            .where('turma_id','=', !!id)
            
            res.status(200).send({docentes: docente, estudantes: estudante});

    } catch (error: any) {
         errorCode = 400
        res.status(errorCode).send({ message: error.message });
    }
}