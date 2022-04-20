import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const getTurmasAtivas = async (req: Request,res: Response) => {

   try {

      const data = await connection('Turma')
      .where('modulo' ,'<>' ,'0')

      res.status(200).send(data);
      
   } catch (err: any) {

      res.status(400).send(err.message)
   }

} 

