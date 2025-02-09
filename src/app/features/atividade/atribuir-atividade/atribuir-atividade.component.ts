import { Component, OnInit } from '@angular/core';
import { Turma } from '../../../shared/models/turma.model';
import { TurmaService } from '../../../services/featuresServices/TurmaService';

@Component({
  selector: 'app-atribuir-atividade',
  templateUrl: './atribuir-atividade.component.html',
  styleUrl: './atribuir-atividade.component.css'
})
export class AtribuirAtividadeComponent implements OnInit{
  turmas: Turma[] = []

  constructor(private turmaService: TurmaService) {}

  ngOnInit(): void {
      this.turmaService.listarTodos().subscribe((dados) => this.turmas = dados);
  }

  /**
   * Para atribuir a atividade a api deverá ser preparada para lidar com isso de forma automática
   * ela receberá um objeto atividade_aluno, com os ids do aluno e da atividade
   * a api cadastrará o objeto para todos os alunos contidos em determinada turma.
   */
}
