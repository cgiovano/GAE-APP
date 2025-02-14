import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Turma } from '../../../shared/models/turma.model';
import { TurmaService } from '../../../services/featuresServices/TurmaService';
import { Aluno } from '../../../shared/models/aluno.model';
import { AlunoService } from '../../../services/featuresServices/AlunoService';
import { AlunoTurmaService } from '../../../services/featuresServices/AlunoTurmaService';
import { AtividadeAluno } from '../../../shared/models/atividade_aluno.model';
import { AtividadeAlunoService } from '../../../services/featuresServices/AtividadeAlunoService';

@Component({
	selector: 'app-atribuir-atividade',
	templateUrl: './atribuir-atividade.component.html',
	styleUrl: './atribuir-atividade.component.css'
})
export class AtribuirAtividadeComponent implements OnInit {
	@Input() associacaoConcluida = new EventEmitter<void>();
	@Input() idAtividadeSelecionada: number = 0;
	
	turmas: Turma[] = [];
	alunos: Aluno[] = [];
	atividadesAlunos: AtividadeAluno[] = [];

	alunosParaAtribuirAtividade: AtividadeAluno[] = [];
	alunosParaRemoverAtividade: AtividadeAluno[] = [];

	constructor(
		private turmaService: TurmaService,
		private alunoService: AlunoService,
		private alunoTurmaService: AlunoTurmaService,
		private atividadeAlunoService: AtividadeAlunoService
	) {}

	ngOnInit(): void {
		this.turmaService.listarTodos().subscribe((dados) => (this.turmas = dados));
		this.alunoService.listarTodos().subscribe((dados) => (this.alunos = dados));
	}

	turmaSelecionada(target: any) {
		console.log(target.value);
		if (target.value == 0) this.alunoService.listarTodos().subscribe((dados) => (this.alunos = dados));
		else
			this.alunoTurmaService
				.listarTodosAssociados(target.value as number)
				.subscribe((dados) => (this.alunos = dados));
	}

	associarAtividadeAlunoQuestao(target: any) {
		if (
			target.checked === true &&
			this.verificarAtividadeAtribuida(target.value, this.idAtividadeSelecionada) == false
		) {
			let atividadeAlunoEmListaIndex = this.alunosParaRemoverAtividade.findIndex(
				(atividadeAluno) =>
					atividadeAluno.id_aluno === target.value &&
					atividadeAluno.id_atividade === this.idAtividadeSelecionada
			);
			if (atividadeAlunoEmListaIndex > 0) {
				this.alunosParaRemoverAtividade.splice(atividadeAlunoEmListaIndex);
			}
			this.alunosParaAtribuirAtividade.push({
				id_aluno: target.value,
				id_atividade: this.idAtividadeSelecionada
			});
		} else {
			if (
				target.checked === false &&
				this.verificarAtividadeAtribuida(target.value, this.idAtividadeSelecionada) == true
			) {
				let atividadeAlunoEmListaIndex = this.alunosParaRemoverAtividade.findIndex(
					(atividadeAluno) =>
						atividadeAluno.id_aluno === target.value &&
						atividadeAluno.id_atividade == this.idAtividadeSelecionada
				);
				if (atividadeAlunoEmListaIndex > 0) {
					this.alunosParaRemoverAtividade.splice(atividadeAlunoEmListaIndex);
				}
			}

			console.log(`Valor: ${target.checked} e id: ${target.value}`);

			this.alunosParaRemoverAtividade.push({ id_aluno: target.value, id_atividade: this.idAtividadeSelecionada });
		}
	}

	verificarAtividadeAtribuida(idAlunoBusca: number, idAtividadeBusca: number): boolean {
		if (
			this.atividadesAlunos.find(
				(atividade) => atividade.id_aluno == idAlunoBusca && atividade.id_atividade == idAtividadeBusca
			)
		)
			return true;
		else return false;
	}

	estaSelecionado(idAluno: number): boolean {
		if (
			this.atividadesAlunos.find((atividadeAluno) => {
				atividadeAluno.id_aluno == idAluno;
			}) != undefined
		)
			return true;
		else return false;
	}

	confirmarAlteracoes() {
		this.atividadeAlunoService
		.criarAssociacao(this.alunosParaAtribuirAtividade)
		.subscribe((dados) => console.log(dados));
	this.atividadeAlunoService.excluirAssociacao(this.alunosParaRemoverAtividade).subscribe();
	this.turmas = [];
	this.alunos = [];
	this.alunosParaAtribuirAtividade = [];
	this.alunosParaRemoverAtividade = [];
	this.associacaoConcluida.emit();
	}
}
