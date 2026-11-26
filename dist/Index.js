import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { SMS } from "./SMS.js";
import { Email } from "./Email.js";
import { NotificacaoApp } from "./NotificacaoApp.js";
import { ValorInvalidoError, ContaBloqueadaError, SaldoInsuficienteError, LimiteDiarioExcedidoError } from "./Excecoes.js";
function realizarSaque(conta, valor) {
    try {
        conta.sacar(valor);
        console.log("Saque realizado com sucesso!");
    }
    catch (erro) {
        if (erro instanceof ValorInvalidoError) {
            conta.cliente.notificar(erro.message);
        }
        else if (erro instanceof ContaBloqueadaError) {
            conta.cliente.notificar(erro.message);
        }
        else if (erro instanceof SaldoInsuficienteError) {
            conta.cliente.notificar(erro.message);
        }
        else if (erro instanceof LimiteDiarioExcedidoError) {
            conta.cliente.notificar(erro.message);
        }
        else {
            console.log("Ocorreu um erro inesperado.");
        }
    }
}
function realizarDeposito(conta, valor) {
    try {
        conta.depositar(valor);
        console.log("Depósito realizado com sucesso!");
    }
    catch (erro) {
        if (erro instanceof ValorInvalidoError) {
            conta.cliente.notificar(erro.message);
        }
        else {
            console.log("Ocorreu um erro inesperado.");
        }
    }
}
const cliente1 = new Cliente([], "Ana", "11111111111", "Rua A", 3000, new SMS());
const cliente2 = new Cliente([], "Bruna", "22222222222", "Rua B", 4000, new SMS());
const cliente3 = new Cliente([], "Carla", "33333333333", "Rua C", 5000, new Email());
const cliente4 = new Cliente([], "Diana", "44444444444", "Rua D", 6000, new Email());
const conta1 = new Conta(1, 123, new Date(), 500, 100, cliente1);
const conta2 = new Conta(2, 123, new Date(), 500, 100, cliente1);
const conta3 = new Conta(3, 123, new Date(), 500, 100, cliente2);
const conta4 = new Conta(4, 123, new Date(), 500, 100, cliente2);
const conta5 = new Conta(5, 123, new Date(), 100, 100, cliente3);
const conta6 = new Conta(6, 123, new Date(), 80, 100, cliente3);
const conta7 = new Conta(7, 123, new Date(), 500, 100, cliente4);
const conta8 = new Conta(8, 123, new Date(), 500, 100, cliente4);
cliente1.adicionarConta(conta1);
cliente1.adicionarConta(conta2);
cliente2.adicionarConta(conta3);
cliente2.adicionarConta(conta4);
cliente3.adicionarConta(conta5);
cliente3.adicionarConta(conta6);
cliente4.adicionarConta(conta7);
cliente4.adicionarConta(conta8);
realizarSaque(conta1, 20);
realizarSaque(conta2, 30);
realizarSaque(conta1, 0);
realizarSaque(conta2, -50);
conta3.bloquear();
conta4.bloquear();
realizarSaque(conta3, 50);
realizarSaque(conta4, 100);
realizarSaque(conta5, 150);
realizarSaque(conta6, 100);
conta7.setTotalSacado(80);
conta8.setTotalSacado(80);
realizarSaque(conta7, 30);
realizarSaque(conta8, 40);
realizarDeposito(conta1, 100);
realizarDeposito(conta2, 200);
console.log("Saldo da conta 1:", conta1.consultarSaldo());
console.log("Saldo da conta 2:", conta2.consultarSaldo());
cliente3.setNotificador(new SMS());
cliente4.setNotificador(new SMS());
realizarSaque(conta5, 200);
realizarSaque(conta6, 200);
cliente1.setNotificador(new Email());
cliente2.setNotificador(new Email());
realizarSaque(conta1, -10);
realizarSaque(conta2, -20);
cliente1.setNotificador(new NotificacaoApp());
cliente2.setNotificador(new NotificacaoApp());
realizarSaque(conta1, 0);
realizarSaque(conta2, 0);
console.log("CPF do cliente 1:", cliente1.getCpf());
console.log("Endereço do cliente 1:", cliente1.getEndereco());
console.log("Renda do cliente 1:", cliente1.getRenda());
console.log("Número da conta 1:", conta1.getNumero());
console.log("Agência da conta 1:", conta1.getAgencia());
console.log("Saldo da conta 1:", conta1.getSaldo());
console.log("Limite diário da conta 1:", conta1.getLimiteDiario());
console.log("Total sacado da conta 1:", conta1.getTotalSacado());
conta1.setSaldo(600);
conta1.setLimiteDiario(200);
console.log("Saldo atualizado:", conta1.getSaldo());
console.log("Limite atualizado:", conta1.getLimiteDiario());
