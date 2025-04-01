import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterOutlet, Routes } from '@angular/router';
import { AtividadeAluno } from '../../../shared/models/atividade_aluno.model';
import { AlunoService } from '../../../services/featuresServices/AlunoService';
import { Atividade } from '../../../shared/models/atividade.model';
import { AtividadeAlunoService } from '../../../services/featuresServices/AtividadeAlunoService';
import { Aluno } from '../../../shared/models/aluno.model';

@Component({
  selector: 'app-listar-alunos-atividades',
  templateUrl: './listar-alunos-atividades.component.html',
  styleUrl: './listar-alunos-atividades.component.css'
})
export class ListarAlunosAtividadesComponent implements OnInit{
  idAtividadeSelecionada: number;
  alunos: Aluno[]
  atividadesAlunos: AtividadeAluno[];

  constructor(private alunoService: AlunoService, private atividadeAlunoService: AtividadeAlunoService, private activatedRoute: ActivatedRoute) {
    this.idAtividadeSelecionada = activatedRoute.snapshot.params['id'];
    console.log(this.idAtividadeSelecionada);
  }

  ngOnInit(): void {
    this.atividadeAlunoService.listarTodosAssociados(this.idAtividadeSelecionada).subscribe((dados) => this.atividadesAlunos = dados);
    this.alunoService.
  }
}
