import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Publicacao } from '../model/Publicacao';

@Injectable({
    providedIn: 'root'
})
export class PublicacaoService {

    constructor(
        private http: HttpClient
    ) { }


    token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
    }

    getAllPostagens(): Observable<Publicacao[]> {
        return this.http.get<Publicacao[]>('http://localhost:8080/publicacao', this.token)
    }

    getByIdPostagem(id: number): Observable<Publicacao> {
        return this.http.get<Publicacao>(`http://localhost:8080/publicacao/${id}`, this.token)
    }

    postPostagem(publicacao: Publicacao): Observable<Publicacao> {
        return this.http.post<Publicacao>('http://localhost:8080/publicacao', publicacao, this.token)
    }

    putPostagem(publicacao: Publicacao): Observable<Publicacao> {
        return this.http.put<Publicacao>('http://localhost:8080/publicacao', publicacao, this.token)
    }

    deletePostagem(id: number) {
        return this.http.delete(`http://localhost:8080/publicacao/${id}`, this.token)
    }
}