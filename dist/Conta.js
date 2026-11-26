import { ValorInvalidoError, ContaBloqueadaError, SaldoInsuficienteError, LimiteDiarioExcedidoError } from "./Excecoes.js";
export class Conta {
    bloqueada = false;
    totalsacado = 0;
    numero;
    agencia;
    dataabertura;
    saldo;
    limitediario;
    cliente;
    constructor(numero, agencia, dataabertura, saldo, limitediario, cliente) {
        this.numero = numero;
        this.agencia = agencia;
        this.dataabertura = dataabertura;
        this.saldo = saldo;
        this.limitediario = limitediario;
        this.cliente = cliente;
    }
    getBloqueada() {
        return this.bloqueada;
    }
    setBloqueada(bloqueada) {
        this.bloqueada = bloqueada;
    }
    getTotalSacado() {
        return this.totalsacado;
    }
    setTotalSacado(totalsacado) {
        this.totalsacado = totalsacado;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getAgencia() {
        return this.agencia;
    }
    setAgencia(agencia) {
        this.agencia = agencia;
    }
    getDataAbertura() {
        return this.dataabertura;
    }
    setDataAbertura(dataabertura) {
        this.dataabertura = dataabertura;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    getLimiteDiario() {
        return this.limitediario;
    }
    setLimiteDiario(limitediario) {
        this.limitediario = limitediario;
    }
    getCliente() {
        return this.cliente;
    }
    consultarSaldo() {
        return this.saldo;
    }
    bloquear() {
        this.bloqueada = true;
    }
    depositar(valor) {
        if (valor <= 0) {
            throw new ValorInvalidoError();
        }
        this.saldo += valor;
        console.log("Depósito de R$ ${valor.toFixed(2)} realizado!");
    }
    sacar(valor) {
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
