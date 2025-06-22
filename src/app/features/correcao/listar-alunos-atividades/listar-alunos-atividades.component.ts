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
import { AtividadeService } from '../../../services/featuresServices/AtividadeService';

@Component({
  selector: 'app-listar-alunos-atividades',
  templateUrl: './listar-alunos-atividades.component.html',
  styleUrl: './listar-alunos-atividades.component.css',
  standalone: false
})
export class ListarAlunosAtividadesComponent implements OnInit {
  idAtividadeSelecionada: number;
  turmas: Turma[];
  alunos: Aluno[];
  atividadesAlunos: AtividadeAluno[];
  idAlunoSelecionado: number;
  correcaoAtivada: Correcao;
  correcoes: Correcao[];
  urlAtual: any;
  atividadeSelecionada: Atividade;

  constructor(private alunoService: AlunoService, private atividadeService: AtividadeService, turmaService: TurmaService, private correcaoService: CorrecaoService, private activatedRoute: ActivatedRoute) {
    this.idAtividadeSelecionada = activatedRoute.snapshot.params['id'];
    this.urlAtual = activatedRoute.snapshot.url;
    this.correcaoAtivada = { id: 0, id_aluno: 0, id_atividade: this.idAtividadeSelecionada, nota: 0 };
  }

  ngOnInit(): void {
    this.atividadeService.obterItemPorId(this.idAtividadeSelecionada).subscribe((dados) => this.atividadeSelecionada = dados);
    this.alunoService.listarAlunosPorAtividade(this.idAtividadeSelecionada).subscribe((dados) => this.alunos = dados);
    this.correcaoService.listarCorrecoesPorAtividade(this.idAtividadeSelecionada).subscribe((dados) => this.correcoes = dados);
  }

  obterTurma(idAluno: number) {

  }

  abrirModalCadastrarCorrecao(modal: ModalComponent, idAluno: number) {
    modal.Abrir('corrigindo atividade: ' + this.atividadeSelecionada.id);
    this.idAlunoSelecionado = idAluno;
    //console.log(this.idAlunoSelecionado);

    const correcaoCadastrada = this.ObterCorrecaoCadastrada(idAluno, this.idAtividadeSelecionada);

    if (correcaoCadastrada != undefined) {
      this.correcaoAtivada = correcaoCadastrada;
    } else {
      this.correcaoService.criar({ id: 0, id_aluno: this.idAlunoSelecionado, id_atividade: this.idAtividadeSelecionada, nota: 0 }).subscribe((dados) => {
        this.correcaoAtivada = dados;
        modal.Abrir('corrigindo atividade, id: ' + this.atividadeSelecionada.id);
        console.log(this.atividadeSelecionada.id);
        this.idAlunoSelecionado = idAluno;
      });
    }
  }

  ObterCorrecaoCadastrada(idAluno: number, idAtividade: number): Correcao | undefined {
    let correcaoCadastrada: Correcao | undefined;

    if (this.correcoes != undefined)
      correcaoCadastrada = this.correcoes.find((correcao) => correcao.id_aluno == idAluno && correcao.id_atividade == idAtividade)
    if (correcaoCadastrada)
      return correcaoCadastrada;
    else
      return undefined;
  }

  verificaAcaoBotaoCorrecao(idAluno: number): string {
    if (this.ObterCorrecaoCadastrada(idAluno, this.idAtividadeSelecionada) != undefined)
      return "Alterar";
    else
      return "Corrigir";
  }

  excluirCorrecao(idAluno: number) {
    let idCorrecao = this.ObterCorrecaoCadastrada(idAluno, this.idAtividadeSelecionada)?.id;

    if (idCorrecao)
      this.correcaoService.excluir(idCorrecao).subscribe();
  }


  onResolvido(modal: ModalComponent) {
    modal.Fechar();
    this.alunoService.listarAlunosPorAtividade(this.idAtividadeSelecionada).subscribe((dados) => this.alunos = dados);
    this.correcaoService.listarCorrecoesPorAtividade(this.idAtividadeSelecionada).subscribe((dados) => this.correcoes = dados);
  }
}
