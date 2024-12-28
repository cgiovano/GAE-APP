import { Component, EventEmitter, Output} from '@angular/core';
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
    this.alunoService.criar(this.aluno).subscribe({
      next: () => this.cadastroConcluido.emit(),
      error: (e) => console.log('Erro no processamento da requisção: ' + e)
    });
  }
}
