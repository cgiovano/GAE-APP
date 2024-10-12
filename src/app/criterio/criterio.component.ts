import { Component, OnInit } from '@angular/core';
import { criterio } from '../models/criterio';
import { HttpClient } from '@angular/common/http';
import { UrlBaseService } from '../UrlBaseService';

@Component({
  selector: 'app-criterio',
  templateUrl: './criterio.component.html',
  styleUrl: './criterio.component.css'
})

export class CriterioComponent implements OnInit {

  criterios: criterio[] = [];

  constructor(private httpClient: HttpClient, private urlBase: UrlBaseService) { }

  ngOnInit(): void {
    this.httpClient.get<criterio[]>(`${this.urlBase.getUrl()}/criterio`).subscribe((dados) => this.criterios = dados);
  }

  ExcluirCriterio(id: number) {
    this.httpClient.delete(`${this.urlBase.getUrl()}/criterio/${id}`).subscribe(() => this.httpClient.get<criterio[]>(`${this.urlBase.getUrl()}/criterio`).subscribe((dados) => this.criterios = dados));
  }
}
