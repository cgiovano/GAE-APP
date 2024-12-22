import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlBaseService } from '../../UrlBaseService';
import { Router } from '@angular/router';
import { criterio } from '../../models/criterio';
import { CriterioComponent } from '../criterio.component';

@Component({
  selector: 'app-cadastrar-criterio',
  templateUrl: './cadastrar-criterio.component.html',
  styleUrl: './cadastrar-criterio.component.css'
})
export class CadastrarCriterioComponent {
  pontuacaoPadrao = 100;
  isLikert: boolean = false;
  criterio: criterio = {id: 0, descricao: '', pontuacao: 0, isLikert: this.isLikert};

  constructor(private httpClient:HttpClient, private urlBase: UrlBaseService, private router: Router) {}

  criarCriterio() {
    if(!this.isLikert) {
      this.criterio.pontuacao = this.pontuacaoPadrao;
    } else {
      this.criterio.pontuacao = 10 / this.criterio.pontuacao;
    }

    console.log(this.criterio);

    this.httpClient.post<criterio>(`${this.urlBase.getUrl()}/criterio/cadastrar`, this.criterio).subscribe(() => this.router.navigate(['criterio']));
  }

  alterarValor(data: boolean) {
    this.isLikert = data;
    this.criterio.isLikert = this.isLikert;
  }
}
