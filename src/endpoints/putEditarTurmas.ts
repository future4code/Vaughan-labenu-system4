import { Request, Response } from 'express'; 
import { Turma } from '../classes/turma';
import { connection } from "../data/connection"


export const putEditarTurma = async (req: Request,res: Response) => {

   const {modulo} = req.body
   const {id} = req.params

   try {
      if(typeof modulo !== "string" || !modulo || !id) {
         throw new Error("type error")
      }

      await connection('Turma')
      .update({modulo})
      .where({id})

      res.status(200).send({message: 'modulo da turma alterado'});

   } catch (err: any) {

      res.status(400).send(err.message)
   }

} 
