import { Injectable } from '@angular/core';
import { ApiService } from '../ApiService';
import { Atividade } from '../../shared/models/atividade.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AtividadeService {
	readonly endpoint = 'atividade';

	constructor(private apiService: ApiService) {}

	/**
	 *
	 * @param atividade Objeto/registro da atividade a ser criada.
	 * @returns Retorna um novo registro da atividade criada.
	 */
	criar(atividade: Atividade): Observable<Atividade> {
		return this.apiService.criar(this.endpoint, atividade);
	}

	/**
	 *
	 * @param id Id do registro da atividade a ser atualizada.
	 * @param atividade Objeto/registro da atividade a ser atualizada.
	 * @returns Retorna o registro da atividade atualizada.
	 */
	atualizar(id: number, atividade: Atividade): Observable<Atividade> {
		return this.apiService.atualizar(this.endpoint, id, atividade);
	}

	/**
	 *
	 * @param id Id do registro da atividade a ser deletado.
	 * @returns O método não retorna valor.
	 */
	excluir(id: number): Observable<void> {
		return this.apiService.excluir(this.endpoint, id);
	}

	/**
	 *
	 * @param id Id do registro da atividade a ser buscado.
	 * @returns Retorna o registro da atividade com base no Id informado.
	 */
	obterItemPorId(id: number): Observable<Atividade> {
		return this.apiService.obterItemPorId(this.endpoint, id);
	}

	/**
	 *
	 * @returns Retorna uma lista com o registro de todas as atividades.
	 */
	listarTodos(): Observable<Atividade[]> {
		return this.apiService.listarTodos(this.endpoint);
	}
}
