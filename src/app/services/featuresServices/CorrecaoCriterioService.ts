import { Injectable } from "@angular/core";
import { ApiService } from "../ApiService";
import { Observable } from "rxjs";
import { CorrecaoCriterio } from "../../shared/models/correcao_criterio.model";

@Injectable({
    providedIn: 'root'
})

export class CorrecaoCriterioService {
    readonly endpoint = 'correcao-criterio';

    constructor(private apiService: ApiService) {}
    
    ListarCorrecaoCriterioPorCorrecao(idCorrecao: number): Observable<CorrecaoCriterio[]> {
        return this.apiService.ListarItensPorId(`${this.endpoint}/correcao`, idCorrecao);
    }

    atualizar(correcoesCriterios: CorrecaoCriterio[]): Observable<CorrecaoCriterio[]> {
        return this.apiService.atualizarEmLista(this.endpoint, correcoesCriterios);
    }
}