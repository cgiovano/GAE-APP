import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterOutlet, Routes } from '@angular/router';
import { AtividadeAluno } from '../../../shared/models/atividade_aluno.model';
import { AlunoService } from '../../../services/featuresServices/AlunoService';
import { Atividade } from '../../../shared/models/atividade.model';
import { AtividadeAlunoService } from '../../../services/featuresServices/AtividadeAlunoService';
import { Aluno } from '../../../shared/models/aluno.model';
import { Turma } from '../../../shared/models/turma.model';
import { TurmaService } from '../../../services/featuresServices/TurmaService';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { Correcao } from '../../../shared/models/correcao.model';
import { CorrecaoService } from '../../../services/featuresServices/CorrecaoService';

@Component({
  selector: 'app-listar-alunos-atividades',
  templateUrl: './listar-alunos-atividades.component.html',
  styleUrl: './listar-alunos-atividades.component.css'
})
export class ListarAlunosAtividadesComponent implements OnInit {
  idAtividadeSelecionada: number;
  turmas: Turma[];
  alunos: Aluno[];
  atividadesAlunos: AtividadeAluno[];
  idAlunoSelecionado: number;
  correcaoCriada: Correcao;

  constructor(private alunoService: AlunoService, private atividadeAlunoService: AtividadeAlunoService, turmaService: TurmaService, private correcaoService: CorrecaoService, private activatedRoute: ActivatedRoute) {
    this.idAtividadeSelecionada = activatedRoute.snapshot.params['id'];
    console.log(this.idAtividadeSelecionada);
    this.correcaoCriada = {id: 0, id_aluno: 10, id_atividade: this.idAtividadeSelecionada, nota: 0};
  }

  ngOnInit(): void {
    this.alunoService.listarAlunosPorAtividade(this.idAtividadeSelecionada).subscribe((dados) => this.alunos = dados);
  }

  obterTurma(idAluno: number) {

  }

  abrirModalCadastrarCorrecao(modal: ModalComponent, idAluno: number) {
    modal.Abrir('corrigindo atividade');
    //modal.Abrir('corrigindo atividade, id: ' + this.correcaoCriada + 'idAluno: ' + idAluno);
    this.idAlunoSelecionado = idAluno;
    console.log(this.idAlunoSelecionado);
    this.correcaoService.criar({id: 0, id_aluno: this.idAlunoSelecionado, id_atividade: this.idAtividadeSelecionada, nota: 0}).subscribe((dados) => {
      this.correcaoCriada = dados;
      modal.Abrir('corrigindo atividade, id: ' + this.correcaoCriada.id);
      this.idAlunoSelecionado = idAluno;
    });
  }
}
