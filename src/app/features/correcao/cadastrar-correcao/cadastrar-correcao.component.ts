import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
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
import { CorrecaoQuestaoService } from '../../../services/featuresServices/CorrecaoQuestaoService';
import { CorrecaoCriterioService } from '../../../services/featuresServices/CorrecaoCriterioService';

@Component({
  selector: 'app-cadastrar-correcao',
  templateUrl: './cadastrar-correcao.component.html',
  styleUrl: './cadastrar-correcao.component.css'
})

export class CadastrarCorrecaoComponent implements OnChanges {
  @Input() correcao: Correcao;
  questoes: Questao[];
  criterios: Criterio[];
  itensCriterios: ItemCriterio[];
  criteriosAtividade: CriterioQuestao[];
  correcaoQuestoes: CorrecaoQuestao[];
  correcaoCriterios: CorrecaoCriterio[];

  constructor(private correcaoQuestaoService: CorrecaoQuestaoService, private correcaoCriterioService: CorrecaoCriterioService, private questaoService: QuestaoService, private criterioService: CriterioService, private itemCriterioService: ItemCriterioService, private criterioQuestaoService: CriterioQuestaoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Estou funcionando!" + this.correcao.id);
    this.questaoService.listarAssociacao(this.correcao.id_atividade).subscribe((dados) => this.questoes = dados);
    this.criterioService.listarTodos().subscribe((dados) => this.criterios = dados);
    this.itemCriterioService.listarTodos().subscribe((dados) => this.itensCriterios = dados);
    this.criterioQuestaoService.listarTodosAssociadosPorAtividade(this.correcao.id_atividade).subscribe((dados) => this.criteriosAtividade = dados);
    this.correcaoQuestaoService.ListarQuestoesCorrecao(this.correcao.id).subscribe((dados) => this.correcaoQuestoes = dados);
    this.correcaoCriterioService.ListarCorrecaoCriterioPorCorrecao(this.correcao.id).subscribe((dados) => this.correcaoCriterios = dados);
  }

  obterDescricaoQuestao(idQuestao: number) {
    return this.questoes.find(dados => dados.id == idQuestao)?.descricao;
  }

  obterCriteriosCorrecaoQuestao(idCorrecaoQuestao: number | undefined): CorrecaoCriterio[] {
    let criteriosQuestao = this.correcaoCriterios.filter(dados => dados.id_correcao_questao == idCorrecaoQuestao);

    return criteriosQuestao;
  }


  obterCriterio(idCriterio: number | undefined): Criterio | undefined {

    let criterioQuestao = this.criterios.find(criterio => criterio.id == idCriterio);

    return criterioQuestao;
  }


  obterItensCriterio(idCriterio: number | undefined): ItemCriterio[] {
    let listaItensCriteriosPorCriterio = this.itensCriterios.filter(dados => dados.id_criterio == idCriterio);
    return listaItensCriteriosPorCriterio;
  }

  selecionarItemCriterio(idCorrecaoCriterio: number, idItemCriterio: number, valor: number) {
    let correcaoCriterio = this.correcaoCriterios.find(item => item.id == idCorrecaoCriterio);

    if (correcaoCriterio) {
      correcaoCriterio.id_item_criterio = idItemCriterio;
      correcaoCriterio.valor = valor;
    }

    console.log(correcaoCriterio);
  }

  imprimirDados() {
    console.log(this.correcaoCriterios);
  }

  valor(valor: number) {
    console.log(valor);
  }
}
