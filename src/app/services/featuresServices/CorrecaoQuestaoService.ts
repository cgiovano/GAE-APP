import { Observable } from "rxjs";
import { CorrecaoQuestao } from "../../shared/models/correcao_questao.model";
import { ApiService } from "../ApiService";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CorrecaoQuestaoService {
    readonly endpoint = "correcao-questao";

    constructor(private apiService: ApiService) {}

    ListarQuestoesCorrecao(idCorrecao: number): Observable<CorrecaoQuestao[]> {
        return this.apiService.ListarItensPorId(`${this.endpoint}/correcao`, idCorrecao);
    }
}