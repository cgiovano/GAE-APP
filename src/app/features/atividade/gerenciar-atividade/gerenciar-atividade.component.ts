import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Criterio } from '../../../shared/models/criterio.model';
import { CriterioQuestao } from '../../../shared/models/criterio_questao.model';
import { Questao } from '../../../shared/models/questao.model';
import { CriterioService } from '../../../services/featuresServices/CriterioService';
import { CriterioQuestaoService } from '../../../services/featuresServices/CriterioQuestaoService';
import { Atividade } from '../../../shared/models/atividade.model';
import { AtividadeService } from '../../../services/featuresServices/AtividadeService';
import { QuestaoService } from '../../../services/featuresServices/QuestaoService';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

type CriterioSelecionado = { selecionado: boolean } & Criterio;

@Component({
  selector: 'app-gerenciar-atividade',
  templateUrl: './gerenciar-atividade.component.html',
  styleUrl: './gerenciar-atividade.component.css'
})

export class GerenciarAtividadeComponent implements OnInit {
  idAtividade: number;
  criterios: Criterio[];
  criteriosQuestao: CriterioQuestao[];
  questaoSelecionada: number = 0;
  questoes: Questao[] = [];
  atividade: Atividade = { id: 0, descricao: '', valor: 0, data_inicio: '', data_fim: '', numero_questoes: 0 };

  constructor(private criterioQuestaoService: CriterioQuestaoService, private questaoService: QuestaoService, private atividadeService: AtividadeService, private criterioService: CriterioService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idAtividade = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.atividadeService.obterItemPorId(this.idAtividade).subscribe((dados) => {this.atividade = dados});
    this.criterioService.listarTodos().subscribe(dados => this.criterios = dados);
    this.questaoService.listarAssociacao(this.idAtividade).subscribe((dados) => this.questoes = dados);
    //this.criterioQuestaoService.listarTodos().subscribe((dados) => this.criteriosQuestao = dados);
  }

  AdicionarCriterioQuestao(id: number) {
    if (this.criteriosQuestao.some((criteriosQuestao) => criteriosQuestao.id_criterio === id)) {
      console.log("O item já está associado");
    } else {
      let cq: CriterioQuestao = { id_questao: 0, id_atividade: this.idAtividade, id_criterio: id }
      //this.criterioQuestaoService.criarAssociacao(cq).subscribe();
    }
  }

  abrirModal(modal: ModalComponent, questaoSelecionada: number | undefined) {
    this.questaoSelecionada = questaoSelecionada as number;
    modal.Abrir('Associando critérios à questão.');
  }

  fecharModal(modal: ModalComponent) {
    modal.Fechar();
  }
}