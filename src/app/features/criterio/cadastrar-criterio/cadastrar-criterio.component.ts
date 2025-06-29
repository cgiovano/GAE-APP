import { Component, numberAttribute, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Criterio } from '../../../shared/models/criterio.model';
import { CriterioService } from '../../../services/featuresServices/CriterioService';
import { EventEmitter } from '@angular/core';
import { ItemCriterio } from '../../../shared/models/item_criterio.model';
import { ItemCriterioService } from '../../../services/featuresServices/ItemCriterioService';

@Component({
    selector: 'app-cadastrar-criterio',
    templateUrl: './cadastrar-criterio.component.html',
    styleUrl: './cadastrar-criterio.component.css',
    standalone: false
})

export class CadastrarCriterioComponent {
  @Output() cadastroConcluido = new EventEmitter<void>();

  pontuacaoPadrao = 100;
  criterio: Criterio = { id: 0, descricao: '', numero_criterios: 0, likert_scale: false };
  listaItensCriterio: Omit<ItemCriterio, 'id'>[];
  idCriterio: number = 0;

  constructor(private criterioService: CriterioService, private itemCriterioService: ItemCriterioService, private router: Router) { }

  criarCriterio() {
    this.criterioService.criar(this.criterio).subscribe((dados) => { 
      this.atualizarLista(dados.id);
      this.itemCriterioService.criar(this.listaItensCriterio as ItemCriterio[]).subscribe((dados) => {console.log(dados); this.cadastroConcluido.emit()});
    });
  }

  atualizarLista(idCriterio: number): void {
    this.listaItensCriterio.forEach(itensCriterio => itensCriterio.id_criterio = idCriterio);
  }

  alterarValor(event: Event) {
    this.criterio.likert_scale = !this.criterio.likert_scale;
    
    if(this.criterio.likert_scale==true) {
      this.carregaItensCriterioUI(2, true);
    } else {
      this.listaItensCriterio = [];
    }
  }

  calculaItensCriterio(event: Event) {
    let quantidadeItens = Number((event.target as HTMLInputElement).value);
    this.carregaItensCriterioUI(quantidadeItens, true);
  }

  carregaItensCriterioUI(quantidadeItens: number, valorAutomatico: boolean) {
    this.listaItensCriterio = [];
    let valorItem = Number((100 / quantidadeItens).toFixed(2));

    if(valorAutomatico) {
      for (let i = 1; i <= quantidadeItens; i++) {
        let val: number = Number(((valorItem * i) / 100).toFixed(2));
        this.listaItensCriterio.push({id_criterio: this.idCriterio, descricao: "", valor: val })
      }
    } else {
      for (let i = 1; i <= quantidadeItens; i++) {
        let val: number = Number(((valorItem * i) / 100).toFixed(2));
        this.listaItensCriterio.push({id_criterio: this.idCriterio, descricao: "", valor: 0 })
      }
    }

    this.criterio.numero_criterios = this.listaItensCriterio.length;
  }
}
