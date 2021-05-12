import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-login-edit',
  templateUrl: './user-login-edit.component.html',
  styleUrls: ['./user-login-edit.component.css']
})
export class UserLoginEditComponent implements OnInit {

  user: User = new User()

   idUser: number
   nome: string
   email: string
   senha: string
   cidade: string
   bairro: string
   telefone: string
   tipo: string
   token: string

  confirmarSenha: string
  confirmarSenha1: string

   nomeValido = false
   emailValido = false
   fotoValida = false
   senhaValida = false
   confirmaSenha = false

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      Swal.fire({
        icon: 'info',
        title: 'Sua sessão inspirou',
        text: 'Faça o login novamente!',
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigate(['/entrar'])
    }
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUserLogin(this.idUser)
  }

  validaNome(event: any) {
    this.nomeValido = this.validar(event.target.value.length < 2 || event.target.value.length > 100, event)
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



  atualizar(){
    //this.user.tipo = this.tipoUserLogin
      this.user.tipo = this.tipo
    if(this.confirmarSenha != this.user.senha){
      Swal.fire({
        icon: 'error',
        title: 'As senhas estão incorretas',
        text: 'Tente novamente',
        showConfirmButton: false,
        timer: 2000
      })

    } else{


      this.authService.atualizar(this.user).subscribe((resp: User) => {
          this.user = resp
          this.router.navigate(['/inicio'])
          Swal.fire({
            icon: 'success',
            title: 'Usuário atualizado com sucesso!',
            text: 'Faça o login novamente',
            showConfirmButton: false,
            timer: 2000
          })

          environment.token = ''
          environment.nome = ''
          environment.id = 0
          environment.tipo = ''

          this.router.navigate(['/entrar'])
      })
    }
  }


  findByIdUserLogin(id: number){
    this.authService.getByIdUserLogin(id).subscribe((resp: User)=>{
      this.user = resp
    })
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }
  tipoUser(event: any) {
    this.tipoUser = event.target.value
  }


  /*findByIdUserLogin(id: number){
    const getLogin = this.authService.getByIdUserLogin(id);
    getLogin.subscribe((resp: UserLogin)=>{
       this.userLogin = resp
     })
   }*/

  }
