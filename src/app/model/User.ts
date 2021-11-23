import { Postagem } from "./Postagem"

export class User{
  public idUsuario: number
  public nomeUsuario: string
  public sobrenomeUsuario: string
  public emailUsuario: string
  public senhaUsuario: string
  public fotoUsuario: string
  public tipoUsuario: string
  public idadeUsuario: number
  public postagem: Postagem[]
}
