import { Component, Input, OnInit } from '@angular/core';
import { Questao } from '../../../shared/models/questao.model';
import { ItemCriterio } from '../../../shared/models/item_criterio.model';
import { Criterio } from '../../../shared/models/criterio.model';
import { QuestaoService } from '../../../services/featuresServices/QuestaoService';
import { CriterioService } from '../../../services/featuresServices/CriterioService';
import { ItemCriterioService } from '../../../services/featuresServices/ItemCriterioService';
import { Correcao } from '../../../shared/models/correcao.model';
import { CriterioQuestaoService } from '../../../services/featuresServices/CriterioQuestaoService';
import { CriterioQuestao } from '../../../shared/models/criterio_questao.model';
import { CorrecaoQuestao } from '../../../shared/models/correcao_questao.model';
import { CorrecaoCriterio } from '../../../shared/models/correcao_criterio.model';

@Component({
  selector: 'app-cadastrar-correcao',
  templateUrl: './cadastrar-correcao.component.html',
  styleUrl: './cadastrar-correcao.component.css'
})

export class CadastrarCorrecaoComponent implements OnInit {
  @Input() correcao: Correcao;
  questoes: Questao[];
  criterios: Criterio[];
  itensCriterios: ItemCriterio[];
  criteriosAtividade: CriterioQuestao[];
  correcaoQuestoes: CorrecaoQuestao[];
  correcaoCriterios: CorrecaoCriterio[];

  constructor(private questaoService: QuestaoService, private criterioService: CriterioService, private itemCriterioService: ItemCriterioService, private criterioQuestaoService: CriterioQuestaoService) {}

  ngOnInit(): void {
    this.questaoService.listarAssociacao(this.correcao.id_atividade).subscribe((dados) => this.questoes = dados);
    this.criterioService.listarTodos().subscribe((dados) => this.criterios = dados);
    this.itemCriterioService.listarTodos().subscribe((dados) => this.itensCriterios = dados);
    this.criterioQuestaoService.listarTodosAssociadosPorAtividade(this.correcao.id_atividade).subscribe((dados) => this.criteriosAtividade = dados);
  }

  criarCorrecaoQuestao(questoes: Questao[]) {
    questoes.forEach((questao) => {
      //criar a lista de correções para as questões;
    });
  }

  obterCriteriosQuestao(idQuestao: number | undefined): Criterio[] {

    let listaCriteriosPorAtividade = this.criteriosAtividade.filter(dados => dados.id_questao == idQuestao);
    let criteriosQuestao = new Set(listaCriteriosPorAtividade.map(dados => dados.id_criterio));
    let res = this.criterios.filter(valor => criteriosQuestao.has(valor.id));

    res.forEach((criterio) => console.log(criterio.likert_scale));

    return res;
  }

  obterItensCriterio(idCriterio: number | undefined): ItemCriterio[] {
    let listaItensCriteriosPorCriterio = this.itensCriterios.filter(dados => dados.id_criterio == idCriterio);
    return listaItensCriteriosPorCriterio;
  }

  cadastrarCorrecao() {

  }
}
