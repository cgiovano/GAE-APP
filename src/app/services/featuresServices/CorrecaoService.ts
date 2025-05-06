import { Injectable } from "@angular/core";
import { ApiService } from "../ApiService";
import { Correcao } from "../../shared/models/correcao.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CorrecaoService {
    readonly endpoint = 'correcao';

    constructor(private apiService: ApiService) {}

    criar(correcao: Correcao) {
        return this.apiService.criar(this.endpoint, correcao);
    }

    listarCorrecoesPorAtividade(idAtividade: number) : Observable<Correcao[]> {
        return this.apiService.ListarItensPorId(`${this.endpoint}/atividade`, idAtividade);
    }
}