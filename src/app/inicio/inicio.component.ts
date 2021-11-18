import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nome = environment.nome
  sobrenome = environment.sobrenome
  foto = environment.foto

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  idPostagem: number
  idDelete: number

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  user: User = new User()
  listaUsuarios: User[]
  idUser = environment.id
  nomeUsuario = environment.nome
  userLogin: UserLogin = new UserLogin

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      // alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['entrar'])
    }

    this.postagemService.refreshToken()
    this.temaService.refreshToken()
    this.authService.refreshToken()

    this.getAllPostagens()
    this.getAllTemas()

}

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.geAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  publicarPostagem(){
    this.user.idUsuario = this.idUser
    this.postagem.usuario = this.user

    this.tema.idTema = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

  editarPostagem(){
    this.user.idUsuario = this.idUser
    this.postagem.usuario = this.user

    this.tema.idTema = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem atualizada com sucesso!')
      this.postagem = new Postagem()
      this.tema = new Tema()
      this.getAllPostagens()
    })
  }

  findByIdPostagem(idPostagem: number){
    alert('Deseja editar essa postagem?')
    this.postagemService.getByIdPostagem(idPostagem).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  deletarPostagem(id: number){
    alert('Tem certeza que você quer excluir esta postagem?')
    this.postagemService.deletePostagem(id).subscribe(() => {
      alert('Postagem excluída com sucesso!')
      this.getAllPostagens()
    })
  }
}
