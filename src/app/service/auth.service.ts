import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

 entrar(userLogin: UserLogin): Observable<UserLogin>{
   return this.http.post<UserLogin>('https://empowerenergyprojeto.herokuapp.com/api/v1/usuarios/logar', userLogin)

 }

 cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://empowerenergyprojeto.herokuapp.com/api/v1/usuarios/cadastrar', user)

}

logado(){
  let ok = false

  if(environment.token != ''){
    ok = true
  }

  return ok
}

}

