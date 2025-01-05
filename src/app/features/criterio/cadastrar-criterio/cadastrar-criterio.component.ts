import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Criterio } from '../../../shared/models/criterio.model';
import { CriterioService } from '../../../services/featuresServices/CriterioService';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cadastrar-criterio',
  templateUrl: './cadastrar-criterio.component.html',
  styleUrl: './cadastrar-criterio.component.css'
})

export class CadastrarCriterioComponent {
  pontuacaoPadrao = 100;
  criterio: Criterio = {id: 0, descricao: '', pontuacao: 0, isLikert: false};

  constructor(private criterioService:CriterioService, private router: Router) {}

  criarCriterio() {
    console.log(this.criterio);
    
    this.criterioService.criar(this.criterio).subscribe((dados) => {console.log(dados); this.router.navigate(['gerenciar-criterio', this.criterio.id])});
  }

  alterarValor(event: Event) {
    this.criterio.isLikert = !this.criterio.isLikert;
    console.log(this.criterio.isLikert);
  }
}
