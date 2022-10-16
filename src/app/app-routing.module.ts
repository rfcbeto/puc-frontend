import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PessoaComponent } from './views/pessoa/pessoa.component';
import { ImportarPlanilhaComponent } from './views/importar-planilha/importar-planilha.component';
import { TrocaComponent } from './views/troca/troca.component';
import { CadastroPessoaComponent } from './views/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroProdutoComponent } from './views/cadastro-produto/cadastro-produto.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pessoa",
    component: PessoaComponent
  },
  {
    path: "importarPlanilha",
    component: ImportarPlanilhaComponent
  },
  {
    path: "troca",
    component: TrocaComponent
  },
  {
    path: "cadastroPessoa",
    component: CadastroPessoaComponent
  },
  {
    path: "cadastroProduto",
    component: CadastroProdutoComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }


];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
