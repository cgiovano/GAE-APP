import { CorrecaoQuestao } from "../../shared/models/correcao_questao.model";
import { ApiService } from "../ApiService";

export class CorrecaoQuestaoService {
    readonly endpoint = "teste";

    constructor(private apiService: ApiService) {}

    criar(correcaoQuestao: CorrecaoQuestao) {
        this.apiService.criar(this.endpoint, correcaoQuestao);
    }
}