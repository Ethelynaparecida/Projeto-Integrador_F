import { Comunidade } from "./Comunidade"
import { User } from "./User"

export class Publicacao{
    public id: number
    public quantidade: number
    public categoria: string
    public descricao: string
    public iscricao: string[]
    public publiComunidade: Comunidade
    public usuario: User
    
}