import { Request, Response } from 'express';
import { Turma } from '../classes/turma';
import { connection } from "../data/connection"


export const putEditarTurma = async (req: Request, res: Response): Promise<void> => {
   let errorCode: number = 400

   const { modulo } = req.body
   const { id } = req.params

   try {
      if (typeof modulo !== "string" || !modulo || !id) {
         errorCode = 422
         throw new Error("type error")
      }

      await connection('Turma')
         .update({ modulo })
         .where({ id })

      res.status(200).send({ message: 'modulo da turma alterado' });

   } catch (err: any) {

      res.status(errorCode).send(err.message)
   }

} 
