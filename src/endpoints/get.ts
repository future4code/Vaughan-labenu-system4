import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const get = async (req: Request,res: Response) => {

   try {

      //const data = await connection('lab_ecommerce')

      res.status(200).send('oi');
   } catch (err: any) {

      res.status(400).send(err.message)
   }

} 