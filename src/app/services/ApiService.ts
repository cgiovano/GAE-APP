import { Injectable } from '@angular/core';
import { UrlBaseService } from './UrlBaseService';
import { HttpClient } from '@angular/common/http';
import { ObjectUnsubscribedError, Observable, ObservableLike } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	urlBase: string;

	constructor(private http: HttpClient, private urlBaseService: UrlBaseService) {
		this.urlBase = urlBaseService.getUrl();
	}

	/**
	 *
	 * @param endpoint String com do endpoint a ser utilizado. Note que deve se seguir o endpoint da API.
	 * @param obj O objeto/dados a serem postados na requisição.
	 * @returns Retorna um item de tipo generico <T>.
	 */
	criar<T>(endpoint: string, obj: T): Observable<T> {
		return this.http.post<T>(`${this.urlBase}/${endpoint}`, obj);
	}

	/**
	 *
	 * @param endpoint String com do endpoint a ser utilizado. Note que deve se seguir o endpoint da API.
	 * @param id Id do objeto a ser atualizado
	 * @param obj O objeto/dados a serem atualizados na requisição.
	 * @returns Retorna um item de tipo generico <T>.
	 */
	atualizar<T>(endpoint: string, id: number, obj: T): Observable<T> {
		return this.http.put<T>(`${this.urlBase}/${endpoint}/${id}`, obj);
	}

	/**
	 *
	 * @param endpoint String com do endpoint a ser utilizado. Note que deve se seguir o endpoint da API.
	 * @param id Id do objeto a ser deletado.
	 * @returns Retorna <void>.
	 */
	excluir(endpoint: string, id: number): Observable<void> {
		return this.http.delete<void>(`${this.urlBase}/${endpoint}`);
	}

	excluirAssociacao(endpoint: string, id_a: number, id_b: number): Observable<void> {
		return this.http.delete<void>(`${this.urlBase}/${endpoint}/deletar?id_turma=${id_a}&id_aluno=${id_b}`);
	}

	/**
	 *
	 * @param endpoint String com do endpoint a ser utilizado. Note que deve se seguir o endpoint da API.
	 * @param id Id do objeto a ser obtido.
	 * @returns Retorna um item de tipo generico <T>.
	 */
	obterItemPorId<T>(endpoint: string, id: number): Observable<T> {
		return this.http.get<T>(`${this.urlBase}/${endpoint}/${id}`);
	}

	/**
	 *
	 * @param endpoint String com do endpoint a ser utilizado. Note que deve se seguir o endpoint da API.
	 * @returns Retorna uma lista de itens de tipo generico <T>.
	 */
	listarTodos<T>(endpoint: string): Observable<T[]> {
		return this.http.get<T[]>(`${this.urlBase}/${endpoint}`);
	}
}