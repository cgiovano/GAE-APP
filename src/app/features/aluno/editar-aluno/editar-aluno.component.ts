import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Aluno } from '../../../shared/models/aluno.model';
import { AlunoService } from '../../../services/featuresServices/AlunoService';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrl: './editar-aluno.component.css'
})
export class EditarAlunoComponent implements OnChanges {
  @Input() alunoSelecionado: Aluno;
  @Output() atualizacaoConcluida = new EventEmitter<void>();

  aluno: Aluno = { id: 0, nome: '' };

  constructor(private alunoService: AlunoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.aluno = this.alunoSelecionado;
    /*this.alunoService.obterItemPorId(this.selectedAluno.id).subscribe({
      next: (dados) => this.aluno = dados,
      error: (e) => console.log("Erro no processamento da requisição: " + e)
    });*/
  }

  Atualizar() {
    this.alunoService.atualizar(this.alunoSelecionado.id, this.aluno).subscribe({
      next: () => this.atualizacaoConcluida.emit(),
      error: (e) => console.log("Erro no processamento da requisição: " + e)
    });
  }
}
