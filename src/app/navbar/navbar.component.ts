import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User = new User()
  idUser: number

  id = environment.id

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      // alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['landing'])
    }

    this.idUser = this.route.snapshot.params['id']
    /* this.findByIdUser(this.idUser) */

    this.authService.refreshToken()
    this.temaService.refreshToken()

    /* this.findAllTemas() */
  }

  findByIdUser(id: number){
    console.log(id)
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
      console.log(resp)
    })
  }

  cadastrarTema(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema
    })
  }

  atualizarTema(){
    console.log(this.tema)
    this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema atualizado com sucesso!')
      this.findAllTemas()
    })
  }

/*   editarPostagem(){
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
  } */

  findByIdTema(idTema: number){
    console.log(idTema)
    /* alert('Deseja editar esse tema?') */
    this.temaService.getByIdTema(idTema).subscribe((resp: Tema) => {
      this.tema = resp

      /* this.apagarTema(this.idTema) */
    })
  }

  apagarTema(idTema: number){
    /* this.tema.idTema = this.idTema */
    /* this.findByIdTema(this.idTema) */
    console.log(idTema)
    alert('Tem certeza que você quer excluir este tema?')
    this.temaService.deleteTema(idTema).subscribe(() => {
      alert('Tema apagado com sucesso!')
      this.tema = new Tema()
      this.findAllTemas()

    })
  }

  /* deletarPostagem(id: number){
    alert('Tem certeza que você quer excluir esta postagem?')
    this.postagemService.deletePostagem(id).subscribe(() => {
      alert('Postagem excluída com sucesso!')
      this.getAllPostagens()
    })
  } */

  sair(){
    this.router.navigate(['landing'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }
}
