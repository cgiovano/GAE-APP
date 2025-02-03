import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, input } from '@angular/core';
import { Criterio } from '../../../shared/models/criterio.model';
import { CriterioQuestao } from '../../../shared/models/criterio_questao.model';
import { CriterioQuestaoService } from '../../../services/featuresServices/CriterioQuestaoService';

@Component({
	selector: 'app-associar-criterio-questao',
	templateUrl: './associar-criterio-questao.component.html',
	styleUrl: './associar-criterio-questao.component.css'
})
export class AssociarCriterioQuestaoComponent implements OnChanges {
	@Input() criterios: Criterio[] = [];
	@Input() idQuestao: number = 0;
  @Input() idAtividade: number = 0;
	@Output() associacaoConcluida = new EventEmitter<void>();

	criteriosQuestao: CriterioQuestao[] = [];

	criteriosParaRemover: CriterioQuestao[] = [];
	criteriosParaAdicionar: CriterioQuestao[] = [];

	constructor(private criterioQuestaoService: CriterioQuestaoService) {}

	ngOnChanges(changes: SimpleChanges): void {
		this.criterioQuestaoService
			.listarTodosAssociados(this.idQuestao)
			.subscribe((dados) => (this.criteriosQuestao = dados));
		console.log(this.criterios);
	}

	estaSelecionado(criterioId: number): boolean {
		if (this.criteriosQuestao.find((criterio) => criterio.id_criterio === criterioId) != undefined) return true;
		else return false;
	}

	confirmarAssociacao() {
		this.criterioQuestaoService
			.criarAssociacao(this.criteriosParaAdicionar)
			.subscribe((dados) => console.log(dados));
		this.criterioQuestaoService.excluirAssociacao(this.criteriosParaRemover).subscribe();
		this.criteriosQuestao = [];
		this.criteriosParaAdicionar = [];
		this.criteriosParaRemover = [];
		this.associacaoConcluida.emit();
	}

	associarCriterioQuestao(target: any) {
		//verificar se o item já está ou não adicionado
		//se o item não estiver associado à questão, então será permitida a associação
		// entretanto, antes verifica se o id a ser associado já está na lista de criterios a serem removidos, se estiver, então o id referente aquele objeto é removido da lista de
		// criterios a serem removidos, somente depois o criterioquestão será adicionado à lista de criterioparaassociar
		// a lógica inversa é válida para a dissociação, por exemplo, verificamos se o target é falso e se o objeto é associado,
		// se o objeto for associado e for marcado como false (para remover) então verificamos se o item a ser removido está ou não na lista de criteriosParaAdicionar
		//caso esteja, então ele será removido da lista de criteriosParaAdicionar e será inserido na lista de criteriosParaRemover
		if (target.checked === true && this.verificarItemLista(target.value, this.idQuestao) == false) {
			let criterioEmListaIndex = this.criteriosParaRemover.findIndex(
				(criterio) => criterio.id_criterio === target.value && criterio.id_questao === this.idQuestao
			);
			if (criterioEmListaIndex > 0) {
				this.criteriosParaRemover.splice(criterioEmListaIndex);
			}
			this.criteriosParaAdicionar.push({ id_questao: this.idQuestao, id_criterio: target.value, id_atividade: this.idAtividade });
		} else {
			if (target.checked === false && this.verificarItemLista(target.value, this.idQuestao) == true) {
				let criterioEmListaIndex = this.criteriosParaAdicionar.findIndex(
					(criterio) => criterio.id_criterio === target.value && criterio.id_questao == this.idQuestao
				);
				if (criterioEmListaIndex > 0) {
					this.criteriosParaRemover.splice(criterioEmListaIndex);
				}
			}

			console.log(`Valor: ${target.checked} e id: ${target.value}`);

			this.criteriosParaRemover.push({ id_questao: this.idQuestao, id_criterio: target.value, id_atividade: this.idAtividade });
		}
	}

	verificarItemLista(idCriterioBusca: number, idQuestaoBusca: number): boolean {
		if (
			this.criteriosQuestao.find((criterioQuestao) => {
				criterioQuestao.id_criterio === idCriterioBusca && criterioQuestao.id_questao === idQuestaoBusca;
			})
		)
			return true;
		else return false;
	}
}
