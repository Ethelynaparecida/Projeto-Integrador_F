import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User()
  confirmarSenha: string
  confirmarSenha1: string
  tipoUsuario: string


  nomeValido = false
  emailValido = false
  cidadeValido = false
  bairroValido = false

  senhaValida = false
  confirmaSenha = false


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }
  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  /* cadastrar() {
     this.user.tipo = this.tipoUsuario
 
     if (this.user.senha != this.confirmarSenha) {
       alert("As senhas não coincidem.")
     } else {
       this.user.tipo = this.tipoUsuario
       this.authService.cadastrar(this.user).subscribe((resp: User) => {
         this.user = resp
         this.router.navigate(['/entrar'])
         alert('Usuario cadastrado com sucesso!')
       })
     }
   }*/

  

  validaNome(event: any) {
    this.nomeValido = this.validar(event.target.value.length < 2 || event.target.value.length > 100, event)
  }

  validaCidade(event: any) {
    this.cidadeValido = this.validar(event.target.value.length < 2 , event)
  }

  validaBairro(event: any) {
    this.bairroValido = this.validar(event.target.value.length < 2, event)
  }

  validaEmail(event: any) {
    this.emailValido = this.validar(event.target.value.indexOf('@') == -1 || event.target.value.indexOf('.') == -1, event)
  }

  validaSenha(event: any) {
    this.senhaValida = this.validar(event.target.value.length < 5 || event.target.value.length > 40, event)
    this.confirmarSenha = event.target.value
  }

  validaConfirmaSenha(event: any) {
    this.confirmaSenha = this.validar(this.confirmarSenha != event.target.value, event)
    this.confirmarSenha1 = event.target.value
  }

  validar(condicao: boolean, event: any) {
    let valido = false
    if (condicao) {
      event.target.classList.remove("is-valid")
      event.target.classList.add("is-invalid")
    } else {
      event.target.classList.remove("is-invalid")
      event.target.classList.add("is-valid")
      valido = true
    }
    return valido
  }

  cadastrar() {
    if (this.confirmarSenha1 != this.confirmarSenha) {
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro',
        text: 'As senhas não conferem ou tem menos de 8 caracteres',
        showConfirmButton: false,
        timer: 2000
      })
    } else {
      if ( this.emailValido && this.bairroValido && this.cidadeValido && this.senhaValida && this.confirmaSenha) {

      this.user.tipo = this.tipoUsuario
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        Swal.fire({
          icon: 'success',
          title: 'Muito bom',
          text: 'Usuário cadastrado com sucesso',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/entrar'])

        
      }, erro => {
        Swal.fire({
          icon: 'error',
          title: 'Ocorreu um erro',
          text: 'E-mail já cadastrado!',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
      else {
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro',
        text: 'Preencha os campos corretamente',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
  }













}



