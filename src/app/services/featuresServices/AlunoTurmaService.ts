import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../ApiService";

@Injectable({
    providedIn: 'root'
})

export class AlunoTurmaService extends ApiService{
    readonly endpoint = 'aluno-turma';
}