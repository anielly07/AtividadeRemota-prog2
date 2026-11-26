import { Conta } from "./Conta.js"
import type { Notificador } from "./Notificador.js"

export class Cliente {
    private contas: Conta[] = [];
    public nome: string;
    private cpf: string;
    private endereco:string;
    private renda:number;
    private notificador: Notificador

    constructor(contas: Conta[], nome:string, cpf:string, endereco:string, renda:number, notificador:Notificador){
        this.contas = contas;
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.renda = renda;
        this.notificador = notificador
    }

    public getContas(): Conta[]{
        return this.contas
    }

    public setContas(contas:Conta[]): void{
        this.contas = contas
    }

    public getCpf():string{
        return this.cpf
    }

    public setCpf(cpf:string):void{
        this.cpf = cpf
    }

    public getEndereco():string{
        return this.endereco
    }

    public setEndereco(endereco:string){
        this.endereco = endereco
    }

    public getRenda():number{
        return this.renda
    }

    public setRenda(renda:number):void{
        this.renda = renda
    }

     public getNotificador(): Notificador{
        return this.notificador
    }

    public setNotificador(notificador:Notificador): void{
        this.notificador = notificador
    }

    adicionarConta(conta: Conta): void{
        this.contas.push(conta);
    }

    notificar(mensagem:string):void {
        this.notificador.enviar(this,mensagem);
    }

}