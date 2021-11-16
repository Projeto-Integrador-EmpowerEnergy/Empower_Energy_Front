import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://empowerenergyprojeto.herokuapp.com/api/v1/postagem/${id}`)
  }

  geAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('https://empowerenergyprojeto.herokuapp.com/api/v1/postagem/todos', this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>('https://empowerenergyprojeto.herokuapp.com/api/v1/postagem/salvar', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://empowerenergyprojeto.herokuapp.com/api/v1/postagem/atualizar', postagem, this.token)
  }

  deletePostagem(id: number){
    this.http.delete(`https://empowerenergyprojeto.herokuapp.com/ap1/v1/postagem/deletar/${id}`, this.token)
  }
}
headers: new HttpHeaders().set('Autorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://empowerenergyprojeto.herokuapp.com/api/v1/postagem/todos', this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://empowerenergyprojeto.herokuapp.com/api/v1/postagem/salvar', this.token)
  }





}

