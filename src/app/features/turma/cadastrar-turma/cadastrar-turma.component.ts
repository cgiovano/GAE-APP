import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnoLetivo } from '../../models/ano_letivo';
import { HttpClient } from '@angular/common/http';
import { UrlBaseService } from '../../UrlBaseService';
import { Router } from '@angular/router';
import { Turma } from '../../models/turma';

@Component({
  selector: 'app-cadastrar-turma',
  templateUrl: './cadastrar-turma.component.html',
  styleUrl: './cadastrar-turma.component.css'
})

export class CadastrarTurmaComponent implements OnInit {

  turma: Turma = { id: 0, identificacao: '', serie: '', ano_id: 0 };
  anosLetivos: AnoLetivo[] = [];
  ano_id: number;
  identificacao: string;
  serie: string;

  constructor(private httpClient: HttpClient, private urlBase: UrlBaseService, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get<AnoLetivo[]>(`${this.urlBase.getUrl()}/ano-letivo`).subscribe((dados) => this.anosLetivos = dados);
  }

  Cadastrar() {
    this.turma= { id: 0, identificacao: this.identificacao, serie: this.serie, ano_id: this.ano_id };
    console.log(this.turma);
    this.httpClient.post<Turma>(`${this.urlBase.getUrl()}/turma`, this.turma).subscribe(() => this.router.navigate(['turma']));
  }

  anoLetivoSelecionado(event: any) {
    this.ano_id = Number(event.target.value);
    console.log(this.ano_id);
  }
}
