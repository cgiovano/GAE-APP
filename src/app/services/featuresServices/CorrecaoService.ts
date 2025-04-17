import { Injectable } from "@angular/core";
import { ApiService } from "../ApiService";
import { Correcao } from "../../shared/models/correcao.model";

@Injectable({
    providedIn: 'root'
})

export class CorrecaoService {
    readonly endpoint = 'correcao';

    constructor(private apiService: ApiService) {}

    criar(correcao: Correcao) {
        return this.apiService.criar(this.endpoint, correcao);
    }
}