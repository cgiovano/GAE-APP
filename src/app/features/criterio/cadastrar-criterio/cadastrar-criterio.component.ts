import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Criterio } from '../../../shared/models/criterio.model';
import { CriterioService } from '../../../services/featuresServices/CriterioService';
import { EventEmitter } from 'stream';
import { ItemCriterio } from '../../../shared/models/item_criterio.model';

@Component({
  selector: 'app-cadastrar-criterio',
  templateUrl: './cadastrar-criterio.component.html',
  styleUrl: './cadastrar-criterio.component.css'
})

export class CadastrarCriterioComponent {
  pontuacaoPadrao = 100;
  criterio: Criterio = { id: 0, descricao: '', pontuacao: 0, isLikert: false };
  listaItensCriterio: ItemCriterio[] = [];
  idCriterio: number = 0;

  constructor(private criterioService: CriterioService, private router: Router) { }

  criarCriterio() {
    console.log(this.criterio);

    this.criterioService.criar(this.criterio).subscribe((dados) => { console.log(dados); this.router.navigate(['gerenciar-criterio', this.criterio.id]) });
  }

  alterarValor(event: Event) {
    this.criterio.isLikert = !this.criterio.isLikert;
    
    if(this.criterio.isLikert==true) {
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
    let valorItem = 100 / quantidadeItens;

    for (let i = 1; i <= quantidadeItens; i++) {
      let val: number = (valorItem * i) / 100;
      this.listaItensCriterio.push({ id: 0, id_criterio: this.idCriterio, descricao: "", valor: val })
    }
  }
}
