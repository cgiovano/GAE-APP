import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlBaseService } from '../../UrlBaseService';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemCriterio } from '../../models/item_criterio';
import { criterio } from '../../models/criterio';

@Component({
  selector: 'app-gerenciar-criterio',
  templateUrl: './gerenciar-criterio.component.html',
  styleUrl: './gerenciar-criterio.component.css'
})
export class GerenciarCriterioComponent implements OnInit {
  item_descricao: string;
  item_ordem: number;
  id_criterio: number = 0;
  itens_criterio: ItemCriterio[] = [];
  ordem_usados: number[] = [];
  criterio_atual: criterio;

  constructor(private httpClient: HttpClient, private urlBase: UrlBaseService, private activatedRoute: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    this.id_criterio = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.httpClient.get<criterio>(`${this.urlBase.getUrl()}/criterio/${this.id_criterio}`).subscribe(dados => this.criterio_atual = dados);
    console.log(this.criterio_atual);
    this.httpClient.get<ItemCriterio[]>(`${this.urlBase.getUrl()}/item-criterio?id_criterio=${this.id_criterio}`).subscribe((dados) => this.itens_criterio = dados);
  }

  CriarCriterio() {
    const item_criterio: ItemCriterio = {id: 0, id_criterio: this.id_criterio, descricao: this.item_descricao, ordem: this.item_ordem};
    console.log(item_criterio);
    
    if(!this.ordem_usados.find((numero_usado) => this.item_ordem === numero_usado)) {
      this.ordem_usados.push(this.item_ordem);
      this.httpClient.post<ItemCriterio>(`${this.urlBase.getUrl()}/item-criterio/cadastrar/`, item_criterio).subscribe(() => this.httpClient.get<ItemCriterio[]>(`${this.urlBase.getUrl()}/item-criterio?id_criterio=${this.id_criterio}`).subscribe((dados) => this.itens_criterio = dados));
      this.item_descricao = '';
      this.item_ordem = 0;
    } else {
      throw new Error("Ordem do item já utilizada. Experimente utilizar outro ordem.");
    }
  }

  ExcluirItem(id: number) {
    this.httpClient.delete(`${this.urlBase.getUrl()}/item-criterio/${id}`).subscribe(() => this.httpClient.get<ItemCriterio[]>(`${this.urlBase.getUrl()}/item-criterio?id_criterio=${this.id_criterio}`).subscribe((dados) => this.itens_criterio = dados));
  }
}
