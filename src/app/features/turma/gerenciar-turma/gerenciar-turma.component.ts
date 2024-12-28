import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlBaseService } from '../../UrlBaseService';
import { Turma } from '../../models/turma';
import { Aluno } from '../../models/aluno';
import { AlunoTurma } from '../../models/aluno_turma';

@Component({
  selector: 'app-gerenciar-turma',
  templateUrl: './gerenciar-turma.component.html',
  styleUrl: './gerenciar-turma.component.css'
})
export class GerenciarTurmaComponent implements OnChanges{

  turma: Turma;
  alunos: Aluno[] = [];
  id_turma : number;

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router, private urlBase: UrlBaseService) {}

  ngOnChanges(changes: SimpleChanges): void {

  }

  ObterNomeAluno(id: number) {
  }

  ExcluirRegistroDaTurma(idAluno: number) {
    this.httpClient.delete(`${this.urlBase.getUrl()}/aluno-turma/deletar?id_turma=${this.id_turma}&id_aluno=${idAluno}`).subscribe(() => this.httpClient.get<Aluno[]>(`${this.urlBase.getUrl()}/aluno-turma/${this.id_turma}`).subscribe(dados => this.alunos = dados));
  }
}
