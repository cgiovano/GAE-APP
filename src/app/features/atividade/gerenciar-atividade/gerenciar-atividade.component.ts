import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Criterio } from '../../../shared/models/criterio.model';
import { CriterioQuestao } from '../../../shared/models/criterio_questao.model';
import { Questao } from '../../../shared/models/questao.model';
import { CriterioService } from '../../../services/featuresServices/CriterioService';
import { CriterioQuestaoService } from '../../../services/featuresServices/CriterioQuestaoService';

type CriterioSelecionado = {selecionado: boolean} & Criterio;

@Component({
  selector: 'app-gerenciar-atividade',
  templateUrl: './gerenciar-atividade.component.html',
  styleUrl: './gerenciar-atividade.component.css'
})

export class GerenciarAtividadeComponent implements OnInit {

  idAtividade: number;
  criterios: Criterio[];
  criteriosQuestao: CriterioQuestao[];
  questoes: Questao[];

  constructor(private criterioQuestaoService: CriterioQuestaoService, private criterioService: CriterioService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idAtividade = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.idAtividade);
    this.criterioService.listarTodos().subscribe(dados => this.criterios = dados);
    this.criterioQuestaoService.listarTodos().subscribe((dados) => this.criteriosQuestao = dados);
  }

  AdicionarCriterioQuestao(id: number) {
    if(this.criteriosQuestao.some((criteriosQuestao) => criteriosQuestao.id_criterio === id)) {
      console.log("O objeto já existe");
    } else {
      let cq: CriterioQuestao = {id_questao: 0, id_atividade: this.idAtividade, id_criterio: id}
      this.criterioQuestaoService.criarAssociacao(cq).subscribe();
    }
  }
}