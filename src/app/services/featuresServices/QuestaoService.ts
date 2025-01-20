import { Injectable } from "@angular/core";
import { ApiService } from "../ApiService";
import { Questao } from "../../shared/models/questao.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class QuestaoService {
    readonly endpoint = 'questao'

    constructor(private apiService: ApiService) {}

    /**
     * 
     * @param questao Objeto/registro da questão a ser criada.
     * @returns Retorna o registro da questão criado.
     */
    criar(questao: Questao | Questao[]): Observable<Questao | Questao[]> {
        return(this.apiService.criarSequencia(this.endpoint, questao));
    }

    /**
     * 
     * @param id Id do registro da turma a ser atualizado.
     * @param questao Objeto/registro da questão a ser atualizado.
     * @returns Retorna o registro da questão atualizado.
     */
    atualizar(id: number, questao: Questao): Observable<Questao> {
        return(this.apiService.atualizar(this.endpoint, id, questao));
    }

    /**
     * 
     * @param id Id do registro da questao a ser deletado.
     * @returns O método não retorna valor.
     */
    excluir(id: number): Observable<void> {
        return(this.apiService.excluir(this.endpoint, id));
    }

    /**
     * 
     * @param id Id do registro da questão a ser buscado.
     * @returns Retorna o registro da questao com base no Id informado.
     */
    obterItemPorId(id: number): Observable<Questao> {
        return(this.apiService.obterItemPorId(this.endpoint, id));
    }

    /**
     * 
     * @returns Retorna uma lista com todos os registros das questões criadas.
     */
    listarTodos(): Observable<Questao[]> {
        return(this.apiService.listarTodos(this.endpoint));
    }

    listarAssociacao(idAtividade: number): Observable<Questao[]> {
        return(this.apiService.listarAssociacao(this.endpoint, `?id_atividade=${idAtividade}`))
    }
}