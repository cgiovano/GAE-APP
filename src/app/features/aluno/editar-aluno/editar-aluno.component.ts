import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Aluno } from '../../../shared/models/aluno.model';
import { AlunoService } from '../../../services/featuresServices/AlunoService';

@Component({
    selector: 'app-editar-aluno',
    templateUrl: './editar-aluno.component.html',
    styleUrl: './editar-aluno.component.css',
    standalone: false
})
export class EditarAlunoComponent {
  @Input() aluno: Aluno;
  @Output() atualizacaoConcluida = new EventEmitter<void>();

  constructor(private alunoService: AlunoService) { }

  Atualizar() {
    this.alunoService.atualizar(this.aluno.id, this.aluno).subscribe(()=>this.atualizacaoConcluida.emit());
  }
}
