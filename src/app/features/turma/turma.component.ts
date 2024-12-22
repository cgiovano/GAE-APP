import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlBaseService } from '../UrlBaseService';
import { Turma } from '../models/turma';
import { Router } from '@angular/router';
import { AnoLetivo } from '../models/ano_letivo';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css'
})
export class TurmaComponent implements OnInit {

  //https://www.telerik.com/blogs/angular-basics-how-to-get-value-selected-dropdown-menu-item

  turmas: Turma[] = [];
  anosLetivos: AnoLetivo[] = []

  constructor(private httpClient: HttpClient, private urlBase: UrlBaseService, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get<Turma[]>(`${this.urlBase.getUrl()}/turma`).subscribe((dados) => this.turmas = dados);
    this.httpClient.get<AnoLetivo[]>(`${this.urlBase.getUrl()}/ano-letivo`).subscribe((dados) => this.anosLetivos = dados);
  }

  Excluir(id: number) {
    this.httpClient.delete(`${this.urlBase.getUrl()}/turma/${id}`).subscribe(() => this.httpClient.get<Turma[]>(`${this.urlBase.getUrl()}/turma`).subscribe((dados) => this.turmas = dados));
  }

  test(id: number) {
    const anoLetivo = this.anosLetivos.find((ano) => ano.id === id);
    console.log(anoLetivo?.ano);
    return(anoLetivo?.ano);
  }
}
