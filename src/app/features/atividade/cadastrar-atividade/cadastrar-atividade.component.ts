import { Component, OnInit } from '@angular/core';
import { Atividade } from '../../../shared/models/atividade.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AtividadeService } from '../../../services/featuresServices/AtividadeService';

@Component({
  selector: 'app-cadastrar-atividade',
  templateUrl: './cadastrar-atividade.component.html',
  styleUrl: './cadastrar-atividade.component.css'
})

export class CadastrarAtividadeComponent implements OnInit{
  atividade: Atividade = {id: 0, descricao: '', data_inicio: '', data_fim: '', valor: 0, numero_questoes: 0};


  constructor(private atividadeService: AtividadeService, private datePipe: DatePipe, private router: Router) {}

  ngOnInit(): void {
    this.atividade.data_inicio = String(this.datePipe.transform(Date.now(), 'yyyy-MM-dd'));
  }

  CriarAtividade() {
    console.log(this.atividade);
    this.atividadeService.criar(this.atividade).subscribe(dados => this.router.navigate(['gerenciar', dados.id]));
  }

  setDate(value: string) {
    this.atividade.data_fim = value;
  }
}
