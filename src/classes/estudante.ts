import { Usuario } from "./usuario";

export class Estudante extends Usuario {
    private hobbies: string[] = []

    constructor(
        id: string,
        nome: string,
        email: string,
        dataNasc: string,
        hobbies: string[]
    ) {
        super(id, nome, email, dataNasc)
        this.hobbies = hobbies
    }

    public getHobbies(): string[] {
        return this.hobbies
    }
}