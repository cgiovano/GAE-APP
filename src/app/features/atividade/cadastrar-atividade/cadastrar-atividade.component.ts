import { Component, OnInit } from '@angular/core';
import { UrlBaseService } from '../../UrlBaseService';
import { Atividade } from '../../models/atividade';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-atividade',
  templateUrl: './cadastrar-atividade.component.html',
  styleUrl: './cadastrar-atividade.component.css'
})

export class CadastrarAtividadeComponent implements OnInit{
  atividade: Atividade = {id: 0, descricao: '', data_inicio: '', data_fim: '', valor: 0, numero_questoes: 0};


  constructor(private httpClient: HttpClient, private urlBase: UrlBaseService, private datePipe: DatePipe, private router: Router) {}

  ngOnInit(): void {
    this.atividade.data_inicio = String(this.datePipe.transform(Date.now(), 'yyyy-MM-dd'));
  }

  CriarAtividade() {
    console.log(this.atividade);
    this.httpClient.post<Atividade>(`${this.urlBase.getUrl()}/atividade/`, this.atividade).subscribe(dados => this.router.navigate(['gerenciar', dados.id]));
  }

  setDate(value: string) {
    this.atividade.data_fim = value;
  }
}
