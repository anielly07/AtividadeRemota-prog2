export class Cliente {
    contas = [];
    nome;
    cpf;
    endereco;
    renda;
    notificador;
    constructor(contas, nome, cpf, endereco, renda, notificador) {
        this.contas = contas;
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.renda = renda;
        this.notificador = notificador;
    }
    getContas() {
        return this.contas;
    }
    setContas(contas) {
        this.contas = contas;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    getRenda() {
        return this.renda;
    }
    setRenda(renda) {
        this.renda = renda;
    }
    getNotificador() {
        return this.notificador;
    }
    setNotificador(notificador) {
        this.notificador = notificador;
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
    notificar(mensagem) {
        this.notificador.enviar(this, mensagem);
    }
}
