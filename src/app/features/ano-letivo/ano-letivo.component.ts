import { Component, OnInit } from '@angular/core';
import { AnoLetivo } from '../models/ano_letivo';
import { HttpClient } from '@angular/common/http';
import { UrlBaseService } from '../UrlBaseService';

@Component({
  selector: 'app-ano-letivo',
  templateUrl: './ano-letivo.component.html',
  styleUrl: './ano-letivo.component.css'
})
export class AnoLetivoComponent implements OnInit {

  anoLetivoLista: AnoLetivo[] = [];

  constructor(private httpClient: HttpClient, private urlBase: UrlBaseService) { }


  ngOnInit(): void {
    this.httpClient.get<AnoLetivo[]>(`${this.urlBase.getUrl()}/ano-letivo`).subscribe(dados => this.anoLetivoLista = dados);
  }

  Excluir(id: number) {
    this.httpClient.delete(`${this.urlBase.getUrl()}/deletar/${id}`).subscribe(() => this.httpClient.get<AnoLetivo[]>(`${this.urlBase.getUrl()}/ano-letivo`).subscribe((dados) => this.anoLetivoLista = dados));
  }
}