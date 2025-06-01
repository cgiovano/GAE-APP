import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Atividade } from '../../../shared/models/atividade.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AtividadeService } from '../../../services/featuresServices/AtividadeService';
import { Questao } from '../../../shared/models/questao.model';
import { QuestaoService } from '../../../services/featuresServices/QuestaoService';

@Component({
    selector: 'app-cadastrar-atividade',
    templateUrl: './cadastrar-atividade.component.html',
    styleUrl: './cadastrar-atividade.component.css',
    standalone: false
})

export class CadastrarAtividadeComponent implements OnInit {
  @Output() cadastroConcluido = new EventEmitter<any>();

  atividade: Atividade = { id: 0, descricao: '', data_inicio: '', data_fim: '', valor: 0, nota_calculada_soma: false, numero_questoes: 0 };
  metodoDeCalculoDeNota: string = "";

  constructor(private atividadeService: AtividadeService, private questaoService: QuestaoService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    this.atividade.data_inicio = String(this.datePipe.transform(Date.now(), 'yyyy-MM-dd'));
  }

  criarAtividade() {
    console.log(this.atividade);
    this.atividadeService.criar(this.atividade).subscribe((dados) => {
      let questoes: Questao[] = [];
      let valorQuestao = 0;

      if(this.atividade.nota_calculada_soma)
        valorQuestao = 10 / this.atividade.numero_questoes as number;
      else
        valorQuestao = this.atividade.valor;

      for (let i = 0; i < this.atividade.numero_questoes; i++) {
        questoes.push({ descricao: '', id_atividade: dados.id, valor: valorQuestao });
      }

      const id = dados.id;

      this.questaoService.criar(questoes).subscribe(() => this.router.navigate(['atividade/gerenciar', id]));
    });
  }

  setDate(value: string) {
    this.atividade.data_fim = value;
  }

  definirMetodoDeCalculoDeNota(checado: boolean) {
    this.atividade.nota_calculada_soma = checado;

    if(checado)
      this.metodoDeCalculoDeNota = "Soma"
    else
      this.metodoDeCalculoDeNota = "media"
    }
}
