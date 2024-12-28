import { Injectable } from '@angular/core';
import { ApiService } from '../ApiService';
import { Criterio } from '../../shared/models/criterio.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CriterioService {
	readonly endpoint = 'criterio';

	constructor(private apiService: ApiService) {}

    /**
     * 
     * @param criterio Objeto/registro da criterio a ser criada.
     * @returns Retorna o registro da criterio criado.
     */
	criar(criterio: Criterio): Observable<Criterio> {
		return this.apiService.criar(this.endpoint, criterio);
	}

    /**
     * 
     * @param id Id do registro da turma a ser atualizado.
     * @param criterio Objeto/registro da criterio a ser atualizado.
     * @returns Retorna o registro da criterio atualizado.
     */
	atualizar(id: number, criterio: Criterio): Observable<Criterio> {
		return this.apiService.atualizar(this.endpoint, id, criterio);
	}

    /**
     * 
     * @param id Id do registro da criterio a ser deletado.
     * @returns O método não retorna valor.
     */
	excluir(id: number): Observable<void> {
		return this.apiService.excluir(this.endpoint, id);
	}

    /**
     * 
     * @param id Id do registro da criterio a ser buscado.
     * @returns Retorna o registro da criterio com base no Id informado.
     */
	obterItemPorId(id: number): Observable<Criterio> {
		return this.apiService.obterItemPorId(this.endpoint, id);
	}

    /**
     * 
     * @returns Retorna uma lista com todos os criterios das questões criadas.
     */
	listarTodos(): Observable<Criterio[]> {
		return this.apiService.listarTodos(this.endpoint);
	}
}
