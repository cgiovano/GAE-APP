import { Component, EventEmitter, input, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Turma } from '../../../shared/models/turma.model';
import { TurmaService } from '../../../services/featuresServices/TurmaService';
import { Aluno } from '../../../shared/models/aluno.model';
import { AlunoService } from '../../../services/featuresServices/AlunoService';
import { AlunoTurmaService } from '../../../services/featuresServices/AlunoTurmaService';
import { AtividadeAluno } from '../../../shared/models/atividade_aluno.model';
import { AtividadeAlunoService } from '../../../services/featuresServices/AtividadeAlunoService';
import { Observable } from 'rxjs';

interface AlunoSelecionado {
	id: number;
	nome: string;
	selecionado: boolean;
}

@Component({
	selector: 'app-atribuir-atividade',
	templateUrl: './atribuir-atividade.component.html',
	styleUrl: './atribuir-atividade.component.css'
})
export class AtribuirAtividadeComponent implements OnChanges {
	@Output() associacaoConcluida = new EventEmitter<void>();
	@Input() eventoFechar: EventEmitter<void>;
	@Input() idAtividadeSelecionada: number;

	selecionarTodosEstado: boolean = false;

	sub: any;

	turmas: Turma[] = [];
	alunos: AlunoSelecionado[] = [];
	atividadesAlunos: AtividadeAluno[] = [];

	alunosParaAtribuirAtividade: AtividadeAluno[] = [];
	alunosParaRemoverAtividade: AtividadeAluno[] = [];

	constructor(
		private turmaService: TurmaService,
		private alunoService: AlunoService,
		private alunoTurmaService: AlunoTurmaService,
		private atividadeAlunoService: AtividadeAlunoService
	) {}

	carregarDados() {
		this.turmaService.listarTodos().subscribe((dados) => (this.turmas = dados));
		//this.alunoService.listarTodos().subscribe((dados) => (this.alunos = dados.map()));

		if (this.idAtividadeSelecionada != 0) {
			this.atividadeAlunoService
				.listarTodosAssociados(this.idAtividadeSelecionada)
				.subscribe((atividadeAluno) => {
					this.atividadesAlunos = atividadeAluno;
					this.alunoService
						.listarTodos()
						.subscribe((dados) => (this.alunos = this.transformarListaDeAlunos(dados)));
				});
		}
	}

	ngOnChanges(): void {
		this.eventoFechar.subscribe(() => {this.carregarDados(); this.selecionarTodosEstado = false});
		this.carregarDados();
	}

	transformarListaDeAlunos(alunos: Aluno[]): AlunoSelecionado[] {
		return alunos.map((aluno) =>
			this.atividadesAlunos.find(
				(atividadeAluno) =>
					aluno.id == atividadeAluno.id_aluno && atividadeAluno.id_atividade == this.idAtividadeSelecionada
			)
				? { ...aluno, selecionado: true }
				: { ...aluno, selecionado: false }
		);
	}

	turmaSelecionada(target: any) {
		if (target.value == 0)
			this.alunoService.listarTodos().subscribe((dados) => (this.alunos = this.transformarListaDeAlunos(dados)));
		else
			this.alunoTurmaService
				.listarTodosAssociados(target.value as number)
				.subscribe((dados) => (this.alunos = this.transformarListaDeAlunos(dados)));
	}

	associarAtividadeAluno() {
		this.alunos.forEach((aluno) => {
			if (
				aluno.selecionado === true &&
				this.verificarAtividadeAtribuida(aluno.id, this.idAtividadeSelecionada) === false
			) {
				this.alunosParaAtribuirAtividade.push({
					id_aluno: aluno.id,
					id_atividade: this.idAtividadeSelecionada
				});
			} else {
				if (
					aluno.selecionado === false &&
					this.verificarAtividadeAtribuida(aluno.id, this.idAtividadeSelecionada) === true
				) {
					this.alunosParaRemoverAtividade.push({
						id_aluno: aluno.id,
						id_atividade: this.idAtividadeSelecionada
					});
				}
			}
		});
	}

	selecionarTodos(event: any) {
		if(event.target.checked === true) {
			this.alunos.forEach(aluno => {
				if(!aluno.selecionado)
					aluno.selecionado = true;
			});
		} else {
			this.alunos.forEach(aluno => {
				if(aluno.selecionado)
					aluno.selecionado = false;
			});
		}


		this.selecionarTodosEstado = !this.selecionarTodosEstado;
	}

	verificarAtividadeAtribuida(idAlunoBusca: number, idAtividadeBusca: number): boolean {
		return this.atividadesAlunos.find(
			(atividade) => atividade.id_aluno == idAlunoBusca && atividade.id_atividade == idAtividadeBusca
		)
			? true
			: false;
	}

	estaSelecionado(idAluno: number): boolean {
		return this.atividadesAlunos.find(
			(atividadeAluno) =>
				atividadeAluno.id_aluno == idAluno && atividadeAluno.id_atividade == this.idAtividadeSelecionada
		)
			? true
			: false;
	}

	confirmarAlteracoes() {
		this.associarAtividadeAluno();
		this.atividadeAlunoService
			.criarAssociacao(this.alunosParaAtribuirAtividade)
			.subscribe((dados) => console.log(dados));
		this.atividadeAlunoService.excluirAssociacao(this.alunosParaRemoverAtividade).subscribe();
		console.log(this.alunos);
		this.alunosParaAtribuirAtividade = [];
		this.alunosParaRemoverAtividade = [];
		this.carregarDados();
		this.associacaoConcluida.emit();
	}
}
