import type {Cliente} from "./Cliente.js"
import {ValorInvalidoError, ContaBloqueadaError,SaldoInsuficienteError, LimiteDiarioExcedidoError} from "./Excecoes.js"

export class Conta {
    private bloqueada: boolean = false;
    private totalsacado: number = 0;
    public numero: number;
    public agencia: number;
    public dataabertura: Date;
    private saldo: number;
    private limitediario: number;
    public readonly cliente: Cliente

    constructor (numero:number, agencia:number, dataabertura:Date, saldo:number, limitediario:number, cliente:Cliente){
        this.numero = numero;
        this.agencia = agencia;
        this.dataabertura = dataabertura;
        this.saldo = saldo;
        this.limitediario = limitediario;
        this.cliente = cliente
    }

      public getBloqueada(): boolean {
        return this.bloqueada;
    }

    public setBloqueada(bloqueada: boolean): void {
        this.bloqueada = bloqueada;
    }

    public getTotalSacado(): number {
        return this.totalsacado;
    }

    public setTotalSacado(totalsacado: number): void {
        this.totalsacado = totalsacado;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getAgencia(): number {
        return this.agencia;
    }

    public setAgencia(agencia: number): void {
        this.agencia = agencia;
    }

    public getDataAbertura(): Date {
        return this.dataabertura;
    }

    public setDataAbertura(dataabertura: Date): void {
        this.dataabertura = dataabertura;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    public getLimiteDiario(): number {
        return this.limitediario;
    }

    public setLimiteDiario(limitediario: number): void {
        this.limitediario = limitediario;
    }

    public getCliente(): Cliente {
        return this.cliente;
    }

    consultarSaldo():number {
        return this.saldo
    }

    bloquear():void {
        this.bloqueada = true
    }

    depositar(valor: number):void {
        if (valor<=0){
            throw new ValorInvalidoError() 
        }
         this.saldo += valor;

        console.log("Depósito de R$ ${valor.toFixed(2)} realizado!")
    }

    sacar (valor:number):void{
        if (valor <= 0) {
            throw new ValorInvalidoError();
        }

        if (this.bloqueada) {
            throw new ContaBloqueadaError();
        }

        if (valor > this.saldo) {
            const falta = valor - this.saldo;
            throw new SaldoInsuficienteError(falta);
        }

        if (this.totalsacado + valor > this.limitediario) {
            throw new LimiteDiarioExcedidoError();
        }

        this.saldo -= valor;
        this.totalsacado += valor;
        console.log("Saque de R$ ${valor.toFixed(2)} realizado!");
    }

}