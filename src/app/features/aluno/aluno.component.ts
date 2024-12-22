import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';

let urlBase: string = 'http://localhost:3000';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css',
})
export class AlunoComponent implements OnInit {
  id: number = 0;
  nome: string = '';
  selectedAluno: Aluno;
  aluno: Aluno = { id: this.id, nome: '' };
  alunos: Aluno[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.CarregarDadosAtualizadosAlunos();
  }

  ExcluirAluno(aluno: Aluno) {
    this.httpClient
      .delete(`${urlBase}/aluno/${aluno.id}`)
      .subscribe(() =>
        this.httpClient
          .get<Aluno[]>(`${urlBase}/aluno`)
          .subscribe((dados) => (this.alunos = dados))
      );
  }

  cadastrarAluno(modal: ModalComponent) {
    this.aluno.nome = this.nome;
    this.httpClient
      .post<Aluno>(`${urlBase}/aluno/cadastrar`, this.aluno)
      .subscribe(() => {
        modal.Close();
        this.CarregarDadosAtualizadosAlunos();
      });
  }

  Atualizar(modal: ModalComponent) {
    this.httpClient
      .put(`${urlBase}/aluno/editar/${this.aluno.id}`, this.aluno)
      .subscribe(() => {
        modal.Close();
        this.CarregarDadosAtualizadosAlunos();
      });
  }

  ModalEditarInit(modal: ModalComponent, selectedAluno: Aluno) {
    this.selectedAluno = selectedAluno;
    modal.Open(
      `Editando registro de "${selectedAluno.nome}(id: ${selectedAluno.id})"`
    );
  }

  CarregarDadosAtualizadosAlunos() {
    this.httpClient
      .get<Aluno[]>(`${urlBase}/aluno`)
      .subscribe((dados) => (this.alunos = dados));
  }

  OnAlunoAtualizado(modal: ModalComponent) {
    modal.Close();
    this.CarregarDadosAtualizadosAlunos();
  }
}
