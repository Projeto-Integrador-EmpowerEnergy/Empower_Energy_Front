import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{
    public dataPostagem: Date
    public descricao: string
    public hashtag: string
    public idPostagem: number
    public imagem: string
    public localizacao: string
    public titulo: string
    public mencao: string
    public tema: Tema
    public usuario: User
}
