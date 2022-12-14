import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaFormComponent } from './cadastro-pessoa/pessoa-form/pessoa-form.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavigationComponent } from './components/template/navigation/navigation.component';
import { ForDirective } from './directives/for.directive';
import { CadastroPessoaComponent } from './views/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroProdutoComponent } from './views/cadastro-produto/cadastro-produto.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { ImportarPlanilhaComponent } from './views/importar-planilha/importar-planilha.component';
import { PessoaComponent } from './views/pessoa/pessoa.component';
import { TrocaComponent } from './views/troca/troca.component';
import { VendaComponent } from './views/venda/venda.component';




@NgModule({
  declarations: [
    AppComponent,
    ForDirective,
    HomeComponent,
    MenuComponent,
    VendaComponent,
    TrocaComponent,
    HeaderComponent,
    FooterComponent,
    PessoaComponent,
    DashboardComponent,
    NavigationComponent,
    CadastroPessoaComponent,
    CadastroProdutoComponent,
    ImportarPlanilhaComponent,
    PessoaFormComponent
  ],
  imports: [

    FormsModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    AppRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
