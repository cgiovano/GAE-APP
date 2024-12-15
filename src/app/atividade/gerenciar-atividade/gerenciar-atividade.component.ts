import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlBaseService } from '../../UrlBaseService';
import { ActivatedRoute, Router } from '@angular/router';
import { criterio } from '../../models/criterio';
import { CriterioQuestao } from '../../models/criterio_questao';
import { Questao } from '../../models/questao';

type CriterioSelecionado = {selecionado: boolean} & criterio;

@Component({
  selector: 'app-gerenciar-atividade',
  templateUrl: './gerenciar-atividade.component.html',
  styleUrl: './gerenciar-atividade.component.css'
})

export class GerenciarAtividadeComponent implements OnInit {

  idAtividade: number;
  criterios: criterio[];
  criteriosQuestao: CriterioQuestao[];
  questoes: Questao[];

  constructor(private httpClient: HttpClient, private urlBase: UrlBaseService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idAtividade = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.httpClient.get<CriterioQuestao[]>(`${this.urlBase.getUrl()}/criterio-questao`).subscribe((dados) => this.criteriosQuestao = dados);
    this.httpClient.get<criterio[]>(`${this.urlBase.getUrl()}/criterio`).subscribe((dados) => this.criterios = dados);
    console.log(this.idAtividade);
  }

  AdicionarCriterioQuestao(id: number) {
    if(this.criteriosQuestao.some((criteriosQuestao) => criteriosQuestao.id_criterio === id)) {
      console.log("O objeto já existe");
    } else {
      let cq: CriterioQuestao = {id_questao: 0, id_atividade: this.idAtividade, id_criterio: id}
      this.httpClient.post(`${this.urlBase.getUrl()}/criterio-questao`, cq).subscribe();
    }
  }
}