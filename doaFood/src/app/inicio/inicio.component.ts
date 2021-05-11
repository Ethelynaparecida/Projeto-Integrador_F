import { Comunidade } from './../model/Comunidade';
import { AuthService } from './../service/auth.service';
import { ComunidadeService } from './../service/comunidade.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Publicacao } from '../model/Publicacao';
import { User } from '../model/User';
import { PublicacaoService } from '../service/publicacao.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  
  tipo = environment.tipo
  token = environment.token
  

  publicacao: Publicacao = new Publicacao()
  listaPublicacao: Publicacao[]

  comunidade: Comunidade = new Comunidade()
  listaComunidade: Comunidade[]
  idComunidade: number

  user: User = new User()
  idUser = environment.id

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private publicacaoService: PublicacaoService,
    private comunidadeService: ComunidadeService,
    private auth: AuthService
  ) { }

  ngOnInit(){

    if(environment.token == ""){
      //alert('Sua seção expirou, faça o login novamente!')
      this.router.navigate(['/entrar'])
    }
    
    this.getAllTemas()
    this.getAllPublicacao()
    this.getByIdUser()
  }

  enviar(){
    this.comunidade.id = this.idComunidade
    this.publicacao.publiComunidade = this.comunidade
    
    this.user.id = this.idUser
    
    this.publicacaoService.postPostagem(this.publicacao).subscribe((resp: Publicacao) => {
    this.publicacao = resp
    alert('Postagem realizado com sucesso!')
    this.publicacao = new Publicacao()
    this.getAllPublicacao()
    })

  }

  atualizarPostagem(){
  }

  getAllTemas(){
    this.comunidadeService.getAllComunidade().subscribe((resp: Comunidade[]) => {
      this.listaComunidade = resp
    })
  }

  getByIdTema(){
    this.comunidadeService.getByIdComunidade(this.idComunidade).subscribe((resp :Comunidade) =>{
      this.comunidade = resp
    })
  }

  getAllPublicacao(){
    this.publicacaoService.getAllPostagens().subscribe((resp: Publicacao[]) =>{
      this.listaPublicacao = resp
    })
  }

  getByIdUser(){
    this.auth.getByIdUser(this.idUser).subscribe((resp: User) =>{
      this.user = resp
    })
  }
}