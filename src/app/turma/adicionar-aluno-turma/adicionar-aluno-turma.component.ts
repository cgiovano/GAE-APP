import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlBaseService } from '../../UrlBaseService';
import { Turma } from '../../models/turma';
import { Aluno } from '../../models/aluno';
import { AlunoTurma } from '../../models/aluno_turma';

@Component({
  selector: 'app-adicionar-aluno-turma',
  templateUrl: './adicionar-aluno-turma.component.html',
  styleUrl: './adicionar-aluno-turma.component.css'
})
export class AdicionarAlunoTurmaComponent implements OnInit {

  alunosLista: Aluno[] = [];
  id_turma: number;

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router, private urlBase: UrlBaseService) { }

  ngOnInit(): void {
    this.id_turma = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log("Esse é o id da turma caputado na criação do componente adicionar-aluno-turma: " + this.id_turma);
    this.httpClient.get<Aluno[]>(`${this.urlBase.getUrl()}/aluno`).subscribe(dados => this.alunosLista = dados);
  }

  AdicionarAluno(idAluno: number) {
    const alunoTurma: AlunoTurma = {id_aluno: idAluno, id_turma: this.id_turma};
    this.httpClient.post<AlunoTurma>(`${this.urlBase.getUrl()}/aluno-turma/cadastrar`, alunoTurma).subscribe(() => console.log(alunoTurma));
  }
}
