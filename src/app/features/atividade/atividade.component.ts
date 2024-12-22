import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Atividade } from '../models/atividade';
import { UrlBaseService } from '../UrlBaseService';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrl: './atividade.component.css'
})
export class AtividadeComponent implements OnInit {
  atividades: Atividade[] = [];

  constructor(private httpClient: HttpClient, private urlBase: UrlBaseService) { }

  ngOnInit(): void {
    this.httpClient.get<Atividade[]>(`${this.urlBase.getUrl()}/atividade`).subscribe((dados) => this.atividades = dados);
  }

  Excluir(id: number) {
    console.log(id);
    this.httpClient.delete(`${this.urlBase.getUrl()}/atividade/${id}`).subscribe(() => this.httpClient.get<Atividade[]>(`${this.urlBase.getUrl()}/atividade`).subscribe((dados) => this.atividades = dados));
  }
}
