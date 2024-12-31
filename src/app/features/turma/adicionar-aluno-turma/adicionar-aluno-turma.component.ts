import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Turma } from '../../../shared/models/turma.model';
import { Aluno } from '../../../shared/models/aluno.model';
import { AlunoTurma } from '../../../shared/models/aluno_turma.model';
import { AlunoTurmaService } from '../../../services/featuresServices/AlunoTurmaService';

@Component({
  selector: 'app-adicionar-aluno-turma',
  templateUrl: './adicionar-aluno-turma.component.html',
  styleUrl: './adicionar-aluno-turma.component.css'
})
export class AdicionarAlunoTurmaComponent implements OnChanges {
  @Input() turmaSelecionada: Turma;
  @Output() associacaoConcluida = new EventEmitter<void>();


  alunosLista: Aluno[] = [];
  idTurma: number;

  constructor(private alunoTurmaService: AlunoTurmaService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.idTurma = this.turmaSelecionada.id;
    this.alunoTurmaService.listarTodosNaoAssociados().subscribe( (dados) => this.alunosLista = dados );
  }

  adicionarAluno(idAluno: number, idLista: number) {
    const alunoTurma: AlunoTurma = {id_aluno: idAluno, id_turma: this.idTurma};
    this.alunoTurmaService.criarAssociacao(alunoTurma).subscribe( ()=> this.alunosLista.splice(idLista, 1));
  }
}
