import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../ApiService";
import { Aluno } from "../../shared/models/aluno.model";
import { AlunoTurma } from "../../shared/models/aluno_turma.model";

@Injectable({
    providedIn: 'root'
})

export class AlunoTurmaService{
    readonly endpoint = 'aluno-turma';

    constructor(private apiService: ApiService) {}

    criarAssociacao(alunoTurma: AlunoTurma): Observable<AlunoTurma> {
        return this.apiService.criar(this.endpoint, alunoTurma);
    }

    excluirAssociacao(id_turma: number, id_aluno: number): Observable<void> {
        return this.apiService.excluirAssociacao(this.endpoint, `?id_turma=${id_turma}&id_aluno=${id_aluno}`);
    }

    listarTodosAssociados(id_turma: number): Observable<Aluno[]> {
        return this.apiService.listarAssociacao(this.endpoint, `?id_turma=${id_turma}`);
    }

    listarTodosNaoAssociados(): Observable<Aluno[]> {
        return this.apiService.listarAssociacao(this.endpoint, "/alunos-sem-turma");
    }
}