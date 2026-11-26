export class NotificacaoApp {
    enviar(cliente, mensagem) {
        console.log("SMS enviado para$ {cliente.nome}: ${mensagem}");
    }
}
