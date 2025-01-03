import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma } from '../../../shared/models/turma.model';
import { Aluno } from '../../../shared/models/aluno.model';
import { AlunoTurma } from '../../../shared/models/aluno_turma.model';
import { AlunoService } from '../../../services/featuresServices/AlunoService';
import { AlunoTurmaService } from '../../../services/featuresServices/AlunoTurmaService';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { TurmaService } from '../../../services/featuresServices/TurmaService';

@Component({
  selector: 'app-gerenciar-turma',
  templateUrl: './gerenciar-turma.component.html',
  styleUrl: './gerenciar-turma.component.css'
})
export class GerenciarTurmaComponent implements OnInit {

  turma: Turma;
  alunos: Aluno[] = [];
  idTurma : number;

  constructor(private alunoService: AlunoService, private alunoTurmaService: AlunoTurmaService, private turmaService: TurmaService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.idTurma = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.turmaService.obterItemPorId(this.idTurma).subscribe((dados)=>this.turma=dados);
    console.log(this.idTurma);
    this.listarAlunosTurma(this.idTurma);
  }

  onResolvido(modal: ModalComponent) {
    modal.Fechar();
    this.listarAlunosTurma(this.idTurma);
  }

  iniciarModalAdicionarAlunoTurma(modal: ModalComponent) {
    modal.Abrir("Adicionando alunos à turma");
    console.log(this.turma);
  }

  listarAlunosTurma(idTurma: number) {
    this.alunoService.listarTodos().subscribe( (dados) => this.alunos = dados);
  }

  excluirRegistroDaTurma(idAluno: number) {
    this.alunoTurmaService.excluirAssociacao(this.idTurma, idAluno).subscribe(() => this.listarAlunosTurma(this.idTurma));
  }
}
