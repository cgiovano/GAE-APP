import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../../shared/models/aluno.model';
import { Router } from '@angular/router';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { AlunoService } from '../../services/featuresServices/AlunoService';
import { ApiService } from '../../services/ApiService';

let urlBase: string = 'http://localhost:3000';

@Component({
	selector: 'app-aluno',
	templateUrl: './aluno.component.html',
	styleUrl: './aluno.component.css'
})
export class AlunoComponent implements OnInit {
	alunoSelecionado: Aluno;
	alunos: Aluno[] = [];

	constructor(private httpClient: HttpClient, private alunoService: AlunoService, private router: Router) {}

	ngOnInit(): void {
		this.carregarListaAlunos();
	}

	onResolvido(modal: ModalComponent) {
		modal.Fechar();
		this.carregarListaAlunos();
	}

	excluirAluno(id: number) {
		this.alunoService.excluir(id).subscribe({
			next: () => console.log('deletado com sucesso'),
			error: () => console.log('Erro no processamento da requisição.')
		});
	}

	carregarListaAlunos() {
		this.alunoService.listarTodos().subscribe({
			next: (value) => (this.alunos = value),
			error: (msg) => console.log('erro no processamento da requisição: ' + msg)
		});
	}

	iniciarModalEditar(modal: ModalComponent, alunoSelecionado: Aluno) {
		this.alunoSelecionado = alunoSelecionado;
		modal.Abrir(`Editando registro de "${alunoSelecionado.nome}(id: ${alunoSelecionado.id})"`);
	}

	iniciarModalCadastrar(modal: ModalComponent) {
		modal.Abrir(`Cadastrando novo aluno`);
	}
}
