import { Injectable } from "@angular/core";
import { ApiService } from "../ApiService";
import { AtividadeAluno } from "../../shared/models/atividade_aluno.model";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class AtividadeAlunoService{
    readonly endpoint: string = 'atividade_aluno';

    constructor(private apiService: ApiService) {}

    criarAssociacao(atividadeAluno: AtividadeAluno[]): Observable<AtividadeAluno | AtividadeAluno[]> {
        return this.apiService.criarSequencia(this.endpoint, atividadeAluno);
    }

    excluirAssociacao(atividadesAlunos: AtividadeAluno[]): Observable<void> {
        return this.apiService.excluirSequencia(this.endpoint, atividadesAlunos);
    }
}