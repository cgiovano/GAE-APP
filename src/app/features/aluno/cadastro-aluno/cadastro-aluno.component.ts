import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Aluno } from '../../models/aluno';
import { Router } from '@angular/router';

let urlBase: string = "http://localhost:3000";

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.css'
})

export class CadastroAlunoComponent {
  nome: string = '';
  aluno: Aluno = { id: 0, nome: '' }

  constructor(private httpClient: HttpClient, private router: Router) { }

  cadastrarAluno() {
    this.aluno.nome = this.nome;
    this.httpClient.post<Aluno>(`${urlBase}/aluno/cadastrar`, this.aluno).subscribe(() => this.router.navigate(['aluno']));
  }

  Cancelar() {
    this.router.navigate(['aluno']);
  }
}
