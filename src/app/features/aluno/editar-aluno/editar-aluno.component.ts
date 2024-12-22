import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
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
export class EditarAlunoComponent implements OnChanges {
  @Input() selectedAluno: Aluno;
  @Output() atualizado = new EventEmitter<void>();
  aluno: Aluno = { id: 0, nome: '' };

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedAluno);

    this.httpClient.get<Aluno>(`${urlBase}/aluno/${this.selectedAluno.id}`).subscribe(res => this.aluno = res);
  }

  Atualizar() {
    console.log(this.aluno);
    this.httpClient.put(`${urlBase}/aluno/editar/${this.selectedAluno.id}`, this.aluno).subscribe(() => this.atualizado.emit());
  }
}
