import { Request, Response } from "express";
import { connection } from "../data/connection";


export const getEspecialistaPOO = async (req: Request, res: Response) => {

   let errorCode = 400

   try {

      const docente = await connection('Docente_Especialidade')
         .select('*')
         .where('especialidade_id', '5')
      const docenteDATA = docente.map( x=> x.docente_id)
      let resul:object[] = []
      for (let i: number = 0; i < docenteDATA.length; i++) {
        const resultado = await connection('Docente')
         .where({id: docenteDATA[i]})
         resul.push(resultado[0])
      } 
      res.status(200).send(resul);

   } catch (error: any) {
      errorCode = 400
      res.status(errorCode).send({ message: error.message });
   }
}