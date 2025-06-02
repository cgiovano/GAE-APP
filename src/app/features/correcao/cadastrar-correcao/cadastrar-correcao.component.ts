import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
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
import { CorrecaoService } from '../../../services/featuresServices/CorrecaoService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-correcao',
  templateUrl: './cadastrar-correcao.component.html',
  styleUrl: './cadastrar-correcao.component.css',
  standalone: false
})

export class CadastrarCorrecaoComponent implements OnChanges {
  @Input() correcao: Correcao;
  @Input() notaCalculadaPorSoma: boolean;
  @Output() atualizacaoConcluida = new EventEmitter<void>;
  questoes: Questao[];
  criterios: Criterio[];
  itensCriterios: ItemCriterio[];
  criteriosAtividade: CriterioQuestao[];
  correcaoQuestoes: CorrecaoQuestao[];
  correcaoCriterios: CorrecaoCriterio[];

  constructor(private correcaoService: CorrecaoService, private correcaoQuestaoService: CorrecaoQuestaoService, private correcaoCriterioService: CorrecaoCriterioService, private questaoService: QuestaoService, private criterioService: CriterioService, private itemCriterioService: ItemCriterioService, private criterioQuestaoService: CriterioQuestaoService, private router: Router) { }

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

  questaoComCriterio(idQuestao: number): boolean {
    let quantidadeCriterios = this.criteriosAtividade.filter(criterio => criterio.id_questao == idQuestao);
    return quantidadeCriterios.length > 0 ? true : false;
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

    this.correcaoQuestoes.forEach(correcaoQuestao => this.corrigirQuestao(correcaoQuestao));
    this.corrigirAtividade(this.correcao);

    console.log(correcaoCriterio);
  }

  estaMarcado(correcaoCriterio: CorrecaoCriterio, idItemCriterio: number) {
    if (correcaoCriterio.id_item_criterio == idItemCriterio)
      return true;
    else
      return false;
  }

  corrigirQuestao(correcaoQuestao: CorrecaoQuestao) {
    let criteriosQuestao = this.correcaoCriterios.filter(correcaoCriterio => correcaoCriterio.id_correcao_questao == correcaoQuestao.id);
    let questao = this.questoes.find(questao => questao.id == correcaoQuestao.id_questao);
    let somaValorCriterio: number = 0;

    criteriosQuestao.forEach(correcaoCriterio => {
      somaValorCriterio += correcaoCriterio.valor;
    });

    if (criteriosQuestao.length > 0 && questao != undefined)
      correcaoQuestao.pontuacao = questao?.valor * (somaValorCriterio / criteriosQuestao.length);
    else
      console.log("não existem criterios para esta questão!");
  }

  corrigirQuestaoSemCriterio(correcaoQuestao: CorrecaoQuestao, idQuestao: number, valorEscala: string) {
    //correcaoQuestao.escala = +valorEscala
    //console.log(correcaoQuestao);
    //console.log(typeof(correcaoQuestao.escala));
    let questao = this.questoes.find(questao => questao.id == correcaoQuestao.id_questao);

    if(questao != undefined)
      correcaoQuestao.pontuacao = questao?.valor * (correcaoQuestao.escala / 100);
  }

  corrigirAtividade(correcao: Correcao) {
    let somaPontosCorrecaoQuestoes: number = 0;

    if (this.correcaoQuestoes.length > 0)
      this.correcaoQuestoes.forEach(correcaoQuestoes => somaPontosCorrecaoQuestoes += correcaoQuestoes.pontuacao);

    if(!this.notaCalculadaPorSoma)
      correcao.nota = somaPontosCorrecaoQuestoes / this.correcaoQuestoes.length;
    else
      correcao.nota = somaPontosCorrecaoQuestoes;
  }

  gravarDados() {
    console.log(this.correcao.id_atividade);
    this.correcaoCriterioService.atualizar(this.correcaoCriterios).subscribe();
    this.correcaoQuestaoService.atualizar(this.correcaoQuestoes).subscribe();
    this.correcaoService.atualizar(this.correcao.id, this.correcao).subscribe();

    try {
      this.atualizacaoConcluida.emit();
    } catch (error) {
      console.log(error);
    }
  }
}
