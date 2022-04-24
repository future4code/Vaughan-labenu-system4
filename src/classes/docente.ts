import { Usuario } from "./usuario";

export class Docente extends Usuario{
    private especialidades: string[] = []

    constructor(
        id: string,
        nome: string,
        email: string,
        dataNasc: string,
        especialidades: string[]
    ) {
        super(id, nome, email, dataNasc)
        this.especialidades = especialidades
    }

    public getEspecialidade(): string[] {
        return this.especialidades
    }
}