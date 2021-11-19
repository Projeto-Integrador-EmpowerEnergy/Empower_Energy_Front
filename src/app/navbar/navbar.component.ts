import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User = new User()
  idUser: number

  id = environment.id

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      // alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['landing'])
    }

    this.idUser = this.route.snapshot.params['id']
    /* this.findByIdUser(this.idUser) */

    this.authService.refreshToken()
  }

  findByIdUser(id: number){
    console.log(id)
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }



  sair(){
    this.router.navigate(['landing'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }
}
