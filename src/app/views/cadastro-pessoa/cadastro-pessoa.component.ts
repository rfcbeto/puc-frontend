import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../../services/pessoas.service';
import { Pessoa } from '../../cadastro-pessoa/pessoa-form/pessoa';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa!: Pessoa;
  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    //console.log('Impressão de pessoa passada por parametro >>>>>>>>> ', this.pessoasService.getPessoa());
    this.pessoa = this.pessoasService.getPessoa();
  }

}
