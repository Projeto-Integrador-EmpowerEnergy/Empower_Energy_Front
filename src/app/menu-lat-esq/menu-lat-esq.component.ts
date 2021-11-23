import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';
import { User } from '../model/User';

@Component({
  selector: 'app-menu-lat-esq',
  templateUrl: './menu-lat-esq.component.html',
  styleUrls: ['./menu-lat-esq.component.css']
})
export class MenuLatEsqComponent implements OnInit {

  nome = environment.nome
  sobrenome = environment.sobrenome
  foto = environment.foto
  idUser: number
  id = environment.id

  user: User = new User()

  constructor( 
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['entrar'])
    }

      this.authService.refreshToken()
  }
  findByIdUser(){
    this.authService.getByIdUser(this.id).subscribe((resp: User) => {
      this.user = resp
    })
  }
}
