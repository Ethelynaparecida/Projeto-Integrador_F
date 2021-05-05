import { Publicacao } from "./Publicacao"
import { User } from "./User"


export class Comunidade{
    public id: number
    public descricao: string
    public nome: string
    public sobre: string
    public publicacao: Publicacao[]
    public meusInscritos: User[]
    public usuarioCriador: User

}