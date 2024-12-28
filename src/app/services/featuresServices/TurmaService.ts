import { Injectable } from '@angular/core';
import { ApiService } from '../ApiService';
import { Observable } from 'rxjs';
import { Turma } from '../../shared/models/turma.model';

@Injectable({
	providedIn: 'root'
})
export class TurmaService {
	readonly endpoint = 'turma';

	constructor(private apiService: ApiService) {}

	/**
	 *
	 * @param turma Objeto/registro da turma a ser criada.
	 * @returns Retorna o registro da turma criada.
	 */
	criar(turma: Turma): Observable<Turma> {
		return this.apiService.criar(this.endpoint, turma);
	}

	/**
	 *
     * @param id Id do registro da turma a ser atualizado.
	 * @param turma Objeto/registro da turma a ser atualizadp.
	 * @returns Retorna o registro da turma atualizado.
	 */
	atualizar(id: number, turma: Turma): Observable<Turma> {
		return this.apiService.atualizar(this.endpoint, id, turma);
	}

	/**
	 *
	 * @param id Id do registro da turma a ser deletado.
	 * @returns O método não retorna valor.
	 */
	excluir(id: number): Observable<void> {
		return this.apiService.excluir(this.endpoint, id);
	}

	/**
	 *
	 * @param id Id do registro da turma a ser buscado.
	 * @returns Retorna o registro da turma com base no Id informado.
	 */
	obterItemPorId(id: number): Observable<Turma> {
		return this.apiService.obterItemPorId(this.endpoint, id);
	}

	/**
	 *
	 * 
	 * @returns Retorna uma lista com todos os registros das turmas criadas.
	 */
	ListarTodos(): Observable<Turma[]> {
		return this.apiService.listarTodos(this.endpoint);
	}
}
