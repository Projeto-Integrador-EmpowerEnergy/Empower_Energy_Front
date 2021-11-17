import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
/*     if(environment.token == ''){
      // alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['landing'])
    }
 */
  }

  sair(){
    this.router.navigate(['landing'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0

  }

}
