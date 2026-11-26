import type {Cliente} from "./Cliente.js"

export interface Notificador {
    enviar(cliente: Cliente, mensagem:string): void;
}