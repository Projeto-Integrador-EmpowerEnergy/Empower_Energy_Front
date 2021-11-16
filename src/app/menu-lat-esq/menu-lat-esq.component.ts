import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-lat-esq',
  templateUrl: './menu-lat-esq.component.html',
  styleUrls: ['./menu-lat-esq.component.css']
})
export class MenuLatEsqComponent implements OnInit {

  constructor( 
    private router: Router
    ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['entrar'])
  }
}
}