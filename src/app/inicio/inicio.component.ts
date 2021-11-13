import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { TemaEnum } from '../model/TemaEnum';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  TemaEnum = TemaEnum

  nome = environment.nome
  sobrenome = environment.sobrenome
  foto = environment.foto

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  user: User = new User()
  listaUsuarios: User[]
  idUser = environment.id
  nomeUsuario = environment.nome
  userLogin: UserLogin = new UserLogin

  constructor(
    private router: Router,
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
    this.authService.refreshToken()

    this.getAllPostagens()
}

/* findByIdTema(){
  this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
    this.tema = resp
  })
} */

  getAllPostagens(){
    console.log(this.idUser)
    console.log(this.nomeUsuario)
    /* console.log(this.nome)
    console.log(this.user)
    console.log(this.userLogin.nome) */

    this.postagemService.geAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  publicar(){
    /* console.log(this.postagem.usuario)
    console.log(this.user.nomeUsuario) */
    /* this.tema.idTema = this.idTema
    this.postagem.tema = this.tema */
    console.log(this.nomeUsuario)

    this.user.idUsuario = this.idUser
    this.postagem.usuario = this.user
    /* this.postagem.usuario.nomeUsuario = this.nome */
    this.postagem.usuario.fotoUsuario = this.foto
    environment.nome = this.nomeUsuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      /* console.log(this.postagem) */
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

}
