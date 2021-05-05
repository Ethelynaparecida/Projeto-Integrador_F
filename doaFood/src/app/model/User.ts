import { Comunidade } from "./Comunidade"

export class User{
    public id: number
    public nome: string
    public email: string 
    public senha: string 
    public cidade: string 
    public bairro: string
    public telefone: string
    public tipo: string
    public usuarioCriador: Comunidade[]
    public minhasComunidades: Comunidade[]
}