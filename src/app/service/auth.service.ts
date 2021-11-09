import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';
import { EntrarComponent } from '../entrar/entrar.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

 entrar(userLogin: UserLogin): Observable<UserLogin>{
   return this.http.post<UserLogin>('https://empowerenergyprojeto.herokuapp.com/api/v1/usuarios/logar',userLogin)

 }

 CadastrarComponent(usuario: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>('https://empowerenergyprojeto.herokuapp.com/api/v1/usuarios/cadastrar',usuario)



}
}
