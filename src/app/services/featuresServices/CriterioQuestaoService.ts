import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../ApiService";
import { Aluno } from "../../shared/models/aluno.model";
import { CriterioQuestao } from "../../shared/models/criterio_questao.model";
import { Criterio } from "../../shared/models/criterio.model";

@Injectable({
    providedIn: 'root'
})

export class CriterioQuestaoService{
    readonly endpoint = 'criterio-questao';

    constructor(private apiService: ApiService) {}

    criarAssociacao(criterioQuestao: CriterioQuestao | CriterioQuestao[]): Observable<CriterioQuestao | CriterioQuestao[]> {
        return this.apiService.criarSequencia(this.endpoint, criterioQuestao);
    }

    excluirAssociacao(listaExclusao: CriterioQuestao[]): Observable<void> {
        return this.apiService.excluirSequencia(this.endpoint, listaExclusao);
    }

    listarTodosAssociadosPorAtividade(id_atividade: number): Observable<CriterioQuestao[]> {
        return this.apiService.listarAssociacao(this.endpoint, `?id_atividade=${id_atividade}`);
    }

    listarTodosAssociados(id_questao: number): Observable<CriterioQuestao[]> {
        return this.apiService.listarAssociacao(this.endpoint, `?id_questao=${id_questao}`);
    }

    obterItem(id_questao: number, id_criterio: number): Observable<CriterioQuestao[]> {
        return this.apiService.listarAssociacao(this.endpoint, `?id_questao=${id_questao}&id_criterio=${id_criterio}`);
    }
}