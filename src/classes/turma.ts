
export class Turma {
   
   private docentes:string[] = [];
   private estudantes:string[] = [];
   private modulo:string = '0'

   constructor(  
      private id:string, 
      private nome:string,
      ) 
   {}
   public getId():string {
      return this.id
   }
   public getNome():string {
      return this.nome
   }
   public getDocentes():string[] {
      return this.docentes
   }
   public getEstudantes():string[] {
      return this.estudantes
   }
   public getModulo():string {
      return this.modulo
   }
}

