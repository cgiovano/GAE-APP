import { Injectable } from '@angular/core';
import { ApiService } from '../ApiService';
import { Aluno } from '../../shared/models/aluno.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AlunoService {
	readonly endpoint = 'aluno';

	constructor(private apiService: ApiService) {}

	/**
	 *
	 * @param aluno Objeto/registro do aluno a ser criado.
	 * @returns Retorna um novo registro do aluno criado.
	 */
	criar(aluno: Aluno): Observable<Aluno> {
		return this.apiService.criar<Aluno>(this.endpoint, aluno);
	}

	/**
	 *
	 * @param id Id do registro do aluno a ser atualizado.
	 * @param aluno Objeto/registro do aluno atualizado.
	 * @returns Retorna o registro do aluno atualizado.
	 */
	atualizar(id: number, aluno: Aluno): Observable<Aluno> {
		return this.apiService.atualizar<Aluno>(this.endpoint, id, aluno);
	}

	/**
	 *
	 * @param id Id do registro do aluno a ser deletado.
	 * @returns O método não retorna valor.
	 */
	excluir(id: number): Observable<void> {
		return this.apiService.excluir(this.endpoint, id);
	}

	/**
	 *
	 * @param id Id do registro do aluno a ser buscado.
	 * @returns Retorna o registro do aluno com base no Id informado.
	 */
	obterItemPorId(id: number): Observable<Aluno> {
		return this.apiService.obterItemPorId<Aluno>(this.endpoint, id);
	}

	/**
	 *
	 * @returns Retorna uma lista com os registro de todos os alunos.
	 */
	listarTodos(): Observable<Aluno[]> {
		return this.apiService.listarTodos<Aluno>(this.endpoint);
	}

	listarAlunosPorAtividade(idAtividade: number): Observable<Aluno[]> {
		return this.apiService.ListarItensPorId(`${this.endpoint}/atividade`, idAtividade);
	}
}
