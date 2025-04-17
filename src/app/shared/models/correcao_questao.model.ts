export interface CorrecaoQuestao {
    id: number, 
    id_questao: number, 
    id_atividade: number, 
    id_correcao: number, 
    id_criterio: number, 
    id_item_criterio: number,

    pontuacao: number,
    descricao_correcao: string
}