import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../model/User';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  nome = environment.nome
  sobrenome = environment.sobrenome
  foto = environment.foto
  idUser: number
  id = environment.id
  /* idUser: number */

  user: User = new User()
  listaUsuarios: User[]
  confirmarSenha: string

  listaPostagens: Postagem[]
  postagem: Postagem = new Postagem()

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private postagemService: PostagemService
    ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      // alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['entrar'])
    }

    this.authService.refreshToken()
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser()



    console.log(this.sobrenome)
    console.log(this.nome)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  editarUsuario(){
    this.user.idUsuario = this.idUser

    if(this.user.senhaUsuario != this.confirmarSenha){
      alert('As senhas estão incorretas.')
    } else {
      console.log(this.user)
      this.authService.atualizar(this.user).subscribe((resp: User) => {
      this.user = resp
      console.log(resp)
      this.router.navigate(['/entrar'])
      alert('Usuario atualizado com sucesso! Faça o login novamente')
      environment.token = ''
      environment.nome = ''
      environment.foto = ''
      environment.id = 0
      this.router.navigate(['/entrar'])
      })
    }
  }

  findByIdUser(){
    console.log(this.idUser)
    this.authService.getByIdUser(this.id).subscribe((resp: User) => {
      this.user = resp
      console.log(this.user)
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

  getAllPostagens(){
    this.postagemService.geAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }
}
