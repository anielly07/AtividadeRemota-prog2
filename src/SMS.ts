import type { Notificador } from "./Notificador.js";
import type { Cliente } from "./Cliente.js";

export class SMS implements Notificador {
    enviar(cliente: Cliente, mensagem:string): void  {
        console.log("SMS enviado para$ {cliente.nome}: ${mensagem}");
    } 
}