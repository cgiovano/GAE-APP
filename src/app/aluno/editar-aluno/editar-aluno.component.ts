import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../../models/aluno';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

let urlBase: string = "http://localhost:3000";

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrl: './editar-aluno.component.css'
})
export class EditarAlunoComponent implements OnInit {
  id: number = 0;
  aluno: Aluno = { id: this.id, nome: '' };

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.httpClient.get<Aluno>(`${urlBase}/aluno/${this.id}`).subscribe(res => this.aluno = res);
  }

  Atualizar() {
    this.httpClient.put(`${urlBase}/aluno/editar/${this.aluno.id}`, this.aluno).subscribe(() => this.router.navigate(['aluno']));
  }

  Cancelar() {
    this.router.navigate(['aluno']);
  }
}
