import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criterio } from '../../../shared/models/criterio.model';
import { CriterioService } from '../../../services/featuresServices/CriterioService';

@Component({
  selector: 'app-cadastrar-criterio',
  templateUrl: './cadastrar-criterio.component.html',
  styleUrl: './cadastrar-criterio.component.css'
})

export class CadastrarCriterioComponent {
  pontuacaoPadrao = 100;
  isLikert: boolean = false;
  criterio: Criterio = {id: 0, descricao: '', pontuacao: 0, isLikert: this.isLikert};

  constructor(private criterioService:CriterioService, private router: Router) {}

  criarCriterio() {
    if(!this.isLikert) {
      this.criterio.pontuacao = this.pontuacaoPadrao;
    } else {
      this.criterio.pontuacao = 10 / this.criterio.pontuacao;
    }

    console.log(this.criterio);
    
    this.criterioService.criar(this.criterio).subscribe( () => this.router.navigate(['gerenciar-criterio', this.criterio]) );
  }

  alterarValor(data: boolean) {
    this.isLikert = data;
    this.criterio.isLikert = this.isLikert;
  }
}
