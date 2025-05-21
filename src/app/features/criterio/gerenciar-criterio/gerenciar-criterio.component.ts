import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemCriterio } from '../../../shared/models/item_criterio.model';
import { Criterio } from '../../../shared/models/criterio.model';
import { ItemCriterioService } from '../../../services/featuresServices/ItemCriterioService';
import { CriterioService } from '../../../services/featuresServices/CriterioService';

@Component({
    selector: 'app-gerenciar-criterio',
    templateUrl: './gerenciar-criterio.component.html',
    styleUrl: './gerenciar-criterio.component.css',
    standalone: false
})
export class GerenciarCriterioComponent implements OnInit {
  item_descricao: string;
  item_ordem: number;
  id_criterio: number = 0;
  itens_criterio: ItemCriterio[] = [];
  ordem_usados: number[] = [];
  criterio_atual: Criterio;

  constructor(private itemCriterioService: ItemCriterioService, private criterioService: CriterioService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_criterio = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.criterioService.obterItemPorId(this.id_criterio).subscribe(dados => this.criterio_atual = dados);
    this.listarItensPorCriterio();
  }

  listarItensPorCriterio() {
    this.itemCriterioService.listarAssociacao(this.id_criterio).subscribe(dados => this.itens_criterio = dados);
  }

  criarCriterio() {
    const item_criterio: ItemCriterio = { id: 0, id_criterio: this.id_criterio, descricao: this.item_descricao, valor : this.item_ordem };
    console.log(item_criterio);

    if (!this.ordem_usados.find((numero_usado) => this.item_ordem === numero_usado)) {
      this.ordem_usados.push(this.item_ordem);
      this.itemCriterioService.criar(item_criterio).subscribe(()=>this.listarItensPorCriterio());
      this.item_descricao = '';
      this.item_ordem = 0;
    } else {
      throw new Error("Ordem do item já utilizada. Experimente utilizar outro ordem.");
    }
  }

  excluirItem(id: number) {
    this.itemCriterioService.excluir(id).subscribe(()=>this.listarItensPorCriterio());
  }
}
