import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../ApiService";
import { Aluno } from "../../shared/models/aluno.model";
import { CriterioQuestao } from "../../shared/models/criterio_questao.model";

@Injectable({
    providedIn: 'root'
})

export class CriterioQuestaoService{
    readonly endpoint = 'criterio-questao';

    constructor(private apiService: ApiService) {}

    criarAssociacao(criterioQuestao: CriterioQuestao): Observable<CriterioQuestao> {
        return this.apiService.criar(this.endpoint, criterioQuestao);
    }

    excluirAssociacao(id_questao: number, id_atividade: number, id_criterio: number): Observable<void> {
        return this.apiService.excluirAssociacao(this.endpoint, `id_questao=${id_questao}&id_atividade=${id_atividade}&id_criterio=${id_criterio}`);
    }

    listarTodos(): Observable<CriterioQuestao[]> {
        return this.apiService.listarTodos(this.endpoint);
    }

    listarTodosAssociados(id_turma: string): Observable<CriterioQuestao[]> {
        return this.apiService.listarAssociacao(this.endpoint, `id_turma=${id_turma}`);
    }

    listarTodosNaoAssociados(): Observable<CriterioQuestao[]> {
        return this.apiService.listarAssociacao(this.endpoint, "/alunos-sem-turma");
    }
}