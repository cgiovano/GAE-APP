import { Component, EventEmitter, OnChanges, Output, SimpleChanges} from '@angular/core';
import { Aluno } from '../../../shared/models/aluno.model';
import { AlunoService } from '../../../services/featuresServices/AlunoService';

@Component({
  selector: 'app-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.component.html',
  styleUrl: './cadastrar-aluno.component.css',
})
export class CadastrarAlunoComponent {
  @Output() cadastroConcluido = new EventEmitter<void>();

  aluno: Aluno = { id: 0, nome: '' };

  constructor(private alunoService: AlunoService) {}

  cadastrarAluno() {
    this.alunoService.criar(this.aluno).subscribe(() => {this.cadastroConcluido.emit(); this.aluno={ id: 0, nome: '' };});
  }
}
