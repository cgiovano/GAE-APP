import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnoLetivo } from '../../models/ano_letivo';
import { HttpClient } from '@angular/common/http';
import { UrlBaseService } from '../../UrlBaseService';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma } from '../../models/turma';

@Component({
  selector: 'app-editar-turma',
  templateUrl: './editar-turma.component.html',
  styleUrl: './editar-turma.component.css'
})

export class EditarTurmaComponent implements OnInit {
  turma_id: number;

  turma: Turma = { id: 0, identificacao: '', serie: '', ano_id: 0 };
  anosLetivos: AnoLetivo[] = [];
  ano_id: number;
  identificacao: string;
  serie: string;

  constructor(private httpClient: HttpClient, private urlBase: UrlBaseService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.turma_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.httpClient.get<Turma>(`${this.urlBase.getUrl()}/turma/${this.turma_id}`).subscribe((dados) => this.CarregarDados(dados));
    this.httpClient.get<AnoLetivo[]>(`${this.urlBase.getUrl()}/ano-letivo`).subscribe((dados) => this.anosLetivos = dados);
    
    this.identificacao = this.turma.identificacao;
    this.serie = this.turma.serie;

    console.log(this.turma_id);
    console.log(this.turma);
  }

  getAno() {
    const a: AnoLetivo | undefined = this.anosLetivos.find((i) => i.id === this.turma.ano_id);
    console.log(a?.ano); 
    return(a?.ano);
  }

  Cadastrar() {
    this.turma= { id: this.turma_id, identificacao: this.identificacao, serie: this.serie, ano_id: this.ano_id };
    console.log(this.turma.ano_id);
    this.httpClient.put(`${this.urlBase.getUrl()}/turma/${this.turma_id}`, this.turma).subscribe(() => this.router.navigate(['turma']));
  }

  anoLetivoSelecionado(event: any) {
    this.ano_id = Number(event.target.value);
    console.log(this.ano_id);
  }
  
  CarregarDados(dados: Turma) {
    this.turma = dados;
    
    this.identificacao = dados.identificacao;
    this.serie = dados.serie;
    this.ano_id = dados.ano_id;
  }
}
