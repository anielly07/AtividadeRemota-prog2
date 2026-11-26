export class ValorInvalidoError extends Error {
    constructor() {
        super("Valor inválido!");
        this.name = "ValorInvalidoError";
    }
}
export class ContaBloqueadaError extends Error {
    constructor() {
        super("Conta bloqueada por suspeita de fraude!");
        this.name = "ContaBloqueadaError";
    }
}
export class SaldoInsuficienteError extends Error {
    valorFaltante;
    constructor(valorFaltante) {
        super(` Saldo insuficiente! Faltam R$ ${valorFaltante.toFixed(2)}.`);
        this.valorFaltante = valorFaltante;
        this.name = "SaldoInsuficienteError";
    }
}
export class LimiteDiarioExcedidoError extends Error {
    constructor() {
        super("Limite diário de saque excedido!");
        this.name = "LimiteDiarioExcedidoError";
    }
}
