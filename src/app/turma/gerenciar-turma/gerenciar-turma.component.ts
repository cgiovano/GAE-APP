import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
export class GerenciarTurmaComponent implements OnInit{

  turma: Turma;
  alunos: Aluno[] = [];
  id_turma : number;

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router, private urlBase: UrlBaseService) {}

  ngOnInit(): void {
    this.id_turma = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.httpClient.get<Turma>(`${this.urlBase.getUrl()}/turma/${this.id_turma}`).subscribe(dados => this.turma = dados);
    this.httpClient.get<Aluno[]>(`${this.urlBase.getUrl()}/aluno-turma/${this.id_turma}`).subscribe(dados => this.alunos = dados);
  }

  ObterNomeAluno(id: number) {
    const aluno = this.alunos.find((item) => item.id === id);
    return(aluno?.nome);
  }
}
