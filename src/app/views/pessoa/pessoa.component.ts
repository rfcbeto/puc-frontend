import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pessoa } from '../../cadastro-pessoa/pessoa-form/pessoa';
import { PessoasService } from '../../services/pessoas.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})

export class PessoaComponent implements AfterViewInit  {

 goToEditarPessoa(pessoa: Pessoa) {
  this.pessoasService.setPessoa(pessoa);
  this.router.navigateByUrl('/cadastroPessoa');
 }

  dataSource = new MatTableDataSource<Pessoa>;
  pessoas: Observable<Pessoa[]>;

  displayedColumns = ['_id', 'nome', 'cpf', 'telefone', 'status', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private pessoasService: PessoasService, private router: Router) {
    this.pessoas = this.pessoasService.findAll();
    console.log(this.pessoas);
    this.pessoas.subscribe(pessoa => {
      this.dataSource.data = pessoa;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
