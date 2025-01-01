import { Injectable } from '@angular/core';
import { ApiService } from '../ApiService';
import { Observable } from 'rxjs';
import { ItemCriterio } from '../../shared/models/item_criterio.model';

@Injectable({
	providedIn: 'root'
})
export class ItemCriterioService {
	readonly endpoint = 'item-criterio';

	constructor(private apiService: ApiService) {}

    /**
     * 
     * @param itemCriterio Objeto/registro da itemCriterio a ser criada.
     * @returns Retorna o registro da itemCriterio criado.
     */
	criar(itemCriterio: ItemCriterio): Observable<ItemCriterio> {
		return this.apiService.criar(this.endpoint, itemCriterio);
	}

    /**
     * 
     * @param id Id do registro da turma a ser atualizado.
     * @param itemCriterio Objeto/registro da itemCriterio a ser atualizado.
     * @returns Retorna o registro da itemCriterio atualizado.
     */
	atualizar(id: number, itemCriterio: ItemCriterio): Observable<ItemCriterio> {
		return this.apiService.atualizar(this.endpoint, id, itemCriterio);
	}

    /**
     * 
     * @param id Id do registro da itemCriterio a ser deletado.
     * @returns O método não retorna valor.
     */
	excluir(id: number): Observable<void> {
		return this.apiService.excluir(this.endpoint, id);
	}

    /**
     * 
     * @param id Id do registro da itemCriterio a ser buscado.
     * @returns Retorna o registro da itemCriterio com base no Id informado.
     */
	obterItemPorId(id: number): Observable<ItemCriterio> {
		return this.apiService.obterItemPorId(this.endpoint, id);
	}

    /**
     * 
     * @returns Retorna uma lista com todos os criterios das questões criadas.
     */
	listarTodos(): Observable<ItemCriterio[]> {
		return this.apiService.listarTodos(this.endpoint);
	}

    listarAssociacao(idCriterio: number): Observable<ItemCriterio[]> {
        return this.apiService.listarAssociacao(this.endpoint, `id_criterio=${idCriterio}`);
    }
}
