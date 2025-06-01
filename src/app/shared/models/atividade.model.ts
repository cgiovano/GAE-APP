export interface Atividade {
    id: number;
    descricao: string;
    data_inicio: string;
    data_fim: string;
    valor: number;
    nota_calculada_soma: boolean;
    numero_questoes: number;
}