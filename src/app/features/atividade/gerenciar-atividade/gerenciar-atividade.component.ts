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
    styleUrl: './gerenciar-atividade.component.css',
    standalone: false
})

export class GerenciarAtividadeComponent implements OnInit {
  idAtividade: number;
  criterios: Criterio[];
  criteriosQuestaoLista: CriterioQuestao[];
  criteriosQuestao: CriterioQuestao[];
  questaoSelecionada: number = 0;
  criteriosAtividade: CriterioQuestao[];
  questoes: Questao[] = [];
  atividade: Atividade = { id: 0, descricao: '', valor: 0, data_inicio: '', data_fim: '', nota_calculada_soma: false, numero_questoes: 0 };

  constructor(private criterioQuestaoService: CriterioQuestaoService, private questaoService: QuestaoService, private atividadeService: AtividadeService, private criterioService: CriterioService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idAtividade = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.atividadeService.obterItemPorId(this.idAtividade).subscribe((dados) => {this.atividade = dados});
    this.criterioService.listarTodos().subscribe(dados => this.criterios = dados);
    this.questaoService.listarAssociacao(this.idAtividade).subscribe((dados) => this.questoes = dados);
    this.criterioQuestaoService.listarTodosAssociadosPorAtividade(this.idAtividade).subscribe((dados) => this.criteriosAtividade = dados);
  }

  confirmarMudancas() {
    for(let i=0; i < this.questoes.length; i++) {
      this.questaoService.atualizar(this.questoes[i].id as number, this.questoes[i]).subscribe((dados) => console.log("inserido: " + dados));
    }
  }

  obterCriteriosQuestao(idQuestao: number | undefined): Criterio[] {

    //filtrar todos os ids dos critérios conforme o id da questão
    //console.log(this.criteriosAtividade);
    let listaCriteriosPorAtividade = this.criteriosAtividade.filter(dados => dados.id_questao == idQuestao);
    let criteriosQuestao = new Set(listaCriteriosPorAtividade.map(dados => dados.id_criterio));
    let res = this.criterios.filter(valor => criteriosQuestao.has(valor.id));
    //console.log(res);

    return res;
  }

  abrirModal(modal: ModalComponent, questaoSelecionada: number | undefined) {
    this.questaoSelecionada = questaoSelecionada as number;
    modal.Abrir('Associando critérios à questão.');
  }

  fecharModal(modal: ModalComponent) {
    modal.Fechar();
  }
}