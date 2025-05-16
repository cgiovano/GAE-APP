import { Injectable } from "@angular/core";
import { ApiService } from "../ApiService";

@Injectable({
    providedIn: 'root'
})

export class CorrecaoCriterioService {
    readonly endpoint = 'correcao-criterio';

    constructor(private apiService: ApiService) {}
    
    ListarCorrecaoCriterioPorCorrecaoQuestao(idQuestao: number) {
        return this.apiService.ListarItensPorId(`${this.endpoint}/correcao-questao`, idQuestao);
    }
}