import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlBaseService } from '../../UrlBaseService';
import { Turma } from '../../models/turma';
import { Aluno } from '../../models/aluno';

@Component({
  selector: 'app-gerenciar-turma',
  templateUrl: './gerenciar-turma.component.html',
  styleUrl: './gerenciar-turma.component.css'
})
export class GerenciarTurmaComponent implements OnInit{

  turma: Turma;
  alunoLista: Aluno[] = [];
  alunoTurma: Aluno[] = []

  constructor(private httpClient: HttpClient, private ativatedRoute: ActivatedRoute, private router: Router, private urlBase: UrlBaseService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
