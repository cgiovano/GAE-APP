import { Injectable } from '@angular/core';
import { ApiService } from '../ApiService';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnoLetivo } from '../../shared/models/ano_letivo.model';

@Injectable({
	providedIn: 'root'
})
export class AnoLetivoService {
    endpoint: string = 'ano-letivo';

	constructor(private apiService: ApiService) {}

	/**
	 *
	 * @param anoLetivo Objeto/registro do ano letivo a ser criado.
	 * @returns Retorna um novo registro do ano letivo.
	 */
	criar(anoLetivo: AnoLetivo): Observable<AnoLetivo> {
		return this.apiService.criar(this.endpoint, anoLetivo);
	}

	/**
	 *
	 * @param id v
	 * @param anoLetivo Objeto/registro do ano letivo atualizado.
	 * @returns Retorna o registro de ano letivo atualizado.
	 */
	atualizar(id: number, anoLetivo: AnoLetivo): Observable<AnoLetivo> {
		return this.apiService.atualizar(this.endpoint, id, anoLetivo);
	}

	/**
	 *
	 * @param id Id do objeto/registro do ano letivo a ser deletado.
	 * @returns O método não retorna valor.
	 */
	excluir(id: number): Observable<void> {
		return this.apiService.excluir(this.endpoint, id);
	}

	/**
	 *
	 * @param id Id do registro do ano letivo a ser buscado.
	 * @returns Retorna o registro de ano letivo com base no Id informado.
	 */
	obterItemPorId(id: number): Observable<AnoLetivo> {
		return this.apiService.obterItemPorId(this.endpoint, id);
	}

	/**
	 *
	 * @returns Retorna uma lista com os registro de todos os anos letivos.
	 */
	listarTodos(): Observable<AnoLetivo[]> {
		return this.apiService.listarTodos(this.endpoint);
		//return this.apiService.listarTodos(this.endpoint);
	}
}
