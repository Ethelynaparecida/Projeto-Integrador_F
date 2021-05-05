import { Comunidade } from "./Comunidade"

export class Publicacao{
    public id: number
    public quantidade: number
    public categoria: string
    public descricao: string
    public iscricao: string[]
    public publiComunidade: Comunidade
    
}