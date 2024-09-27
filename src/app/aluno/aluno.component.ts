import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno';
import { Router } from '@angular/router';

let urlBase: string = "http://localhost:3000";

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})

export class AlunoComponent implements OnInit {

  alunos: Aluno[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
    this.httpClient.get<Aluno[]>(`${urlBase}/aluno`).subscribe(dados => this.alunos = dados);
  }

  ExcluirAluno(aluno: Aluno) {
    this.httpClient.delete(`${urlBase}/aluno/${aluno.id}`).subscribe(() => this.httpClient.get<Aluno[]>(`${urlBase}/aluno`).subscribe(dados => this.alunos = dados));
  }
}
