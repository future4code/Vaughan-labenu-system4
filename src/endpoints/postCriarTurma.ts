import { Request, Response } from 'express'; 
import { Turma } from '../classes/turma';
import { connection } from "../data/connection"



export const postCriarTurma = async (req: Request,res: Response) => {


   const {nome} = req.body


   try {
      if(typeof nome !== "string" || !nome) {
         throw new Error("type error")
      }

      const id = String(Date.now())
      const turma:Turma = new Turma(id,nome)

      await connection('Turma')
      .insert({id:turma.getId(),nome: turma.getNome(), modulo: turma.getModulo()})

      
      res.status(200).send({message: 'turma criada'});
      
   } catch (err: any) {

      res.status(400).send(err.message)
   }

} 
