export class Usuario {
    protected turmaId: string | null = null

    constructor(
        protected id: string,
        protected nome: string,
        protected email: string,
        protected dataNasc: string,
    ) { }

    public getId(): string {
        return this.id
    }

    public getNome(): string {
        return this.nome
    }

    public getEmail(): string {
        return this.email
    }

    public getDataNasc(): string {
        return this.dataNasc
    }

    public getTurmaId(): string | null {
        return this.turmaId
    }
}