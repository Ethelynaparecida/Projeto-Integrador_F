import { ComunidadeEditComponent } from './edit/comunidade-edit/comunidade-edit.component';
import { ComunidadeDeleteComponent } from './delete/comunidade-delete/comunidade-delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ComunidadeComponent } from './comunidade/comunidade.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


const routes: Routes = [
  {path:'', redirectTo: 'inicio', pathMatch:'full'},
  {path:'entrar', component:EntrarComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'inicio', component: InicioComponent },
  {path:'comunidade', component: ComunidadeComponent},
  {path:'comunidade-edit/:id', component: ComunidadeEditComponent},
  {path:'comunidade-delet/:id', component: ComunidadeDeleteComponent},
  {path:'comunidade', component: ComunidadeComponent},
  {path: 'sobreNos', component: SobreNosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
