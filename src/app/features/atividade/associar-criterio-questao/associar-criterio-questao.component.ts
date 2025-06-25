import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, input } from '@angular/core';
import { Criterio } from '../../../shared/models/criterio.model';
import { CriterioQuestao } from '../../../shared/models/criterio_questao.model';
import { CriterioQuestaoService } from '../../../services/featuresServices/CriterioQuestaoService';
import { Location } from '@angular/common';

@Component({
	selector: 'app-associar-criterio-questao',
	templateUrl: './associar-criterio-questao.component.html',
	styleUrl: './associar-criterio-questao.component.css',
	standalone: false
})
export class AssociarCriterioQuestaoComponent implements OnChanges {
	@Input() criterios: Criterio[] = [];
	@Input() idQuestao: number = 0;
	@Input() idAtividade: number = 0;
	@Output() associacaoConcluida = new EventEmitter<void>();

	criteriosQuestao: CriterioQuestao[] = [];

	criteriosParaRemover: CriterioQuestao[] = [];
	criteriosParaAdicionar: CriterioQuestao[] = [];

	constructor(private criterioQuestaoService: CriterioQuestaoService, private location: Location) { }

	ngOnChanges(changes: SimpleChanges): void {
		this.criterioQuestaoService
			.listarTodosAssociados(this.idQuestao)
			.subscribe((dados) => { this.criteriosQuestao = dados; console.log(this.criteriosQuestao) });
		console.log("O id da questao é: " + this.idQuestao);
	}

	estaSelecionado(criterioId: number): boolean {
		if (this.criteriosQuestao.find((criterio) => criterio.id_criterio === criterioId) != undefined) return true;
		else return false;
	}

	confirmarAssociacao() {
		if (this.criteriosParaAdicionar.length > 0) {
			this.criterioQuestaoService
				.criarAssociacao(this.criteriosParaAdicionar)
				.subscribe(() => {
					if (this.criteriosParaRemover.length >= 0) {
						this.criterioQuestaoService.excluirAssociacao(this.criteriosParaRemover).subscribe(() => {
							//this.limparDadosERecarregar();
						});
					} else {
						//this.limparDadosERecarregar();
					}
				});
		}

		if (this.criteriosParaRemover.length > 0) {
			this.criterioQuestaoService
				.excluirAssociacao(this.criteriosParaRemover)
				.subscribe(() => {
					if (this.criteriosParaAdicionar.length >= 0) {
						this.criterioQuestaoService.criarAssociacao(this.criteriosParaAdicionar).subscribe(() => {
							//this.limparDadosERecarregar();
						});
					} else {
						//this.limparDadosERecarregar();
					}
				});
		}

		this.limparDadosERecarregar();
	}

	recarregar() {
		this.location.replaceState(this.location.path());
		window.location.reload();
	}

	limparDadosERecarregar() {
		this.criterioQuestaoService.excluirAssociacao(this.criteriosParaRemover).subscribe();
		this.criteriosQuestao = [];
		this.criteriosParaAdicionar = [];
		this.criteriosParaRemover = [];
		this.associacaoConcluida.emit(this.recarregar());
	}

	associarCriterioQuestao(target: any) {
		//verificar se o item já está ou não adicionado
		//se o item não estiver associado à questão, então será permitida a associação
		// entretanto, antes verifica se o id a ser associado já está na lista de criterios a serem removidos, se estiver, então o id referente aquele objeto é removido da lista de
		// criterios a serem removidos, somente depois o criterioquestão será adicionado à lista de criterioparaassociar
		// a lógica inversa é válida para a dissociação, por exemplo, verificamos se o target é falso e se o objeto é associado,
		// se o objeto for associado e for marcado como false (para remover) então verificamos se o item a ser removido está ou não na lista de criteriosParaAdicionar
		//caso esteja, então ele será removido da lista de criteriosParaAdicionar e será inserido na lista de criteriosParaRemover
		if (target.checked == true) {
			let criterioEmListaIndex = this.criteriosParaRemover.findIndex(
				(criterio) => criterio.id_criterio == target.value && criterio.id_questao === this.idQuestao
			);
			if (criterioEmListaIndex >= 0) {
				console.log("O item consta na lista para remoção");
				this.criteriosParaRemover.splice(criterioEmListaIndex, 1);
				console.log("O item foi removido")
				console.log(this.criteriosParaAdicionar);
				console.log(this.criteriosParaRemover);
			}
			if (this.verificarItemLista(target.value, this.idQuestao) == false) {
				console.log(`Valor: ${target.checked} e id: ${target.value}`);

				if (!(this.criteriosParaAdicionar.find((criterioQuestao) => criterioQuestao.id_criterio == target.value)))
					this.criteriosParaAdicionar.push({ id_questao: this.idQuestao, id_criterio: target.value, id_atividade: this.idAtividade });
			}
		}

		if (target.checked == false) {
			let criterioEmListaIndex = this.criteriosParaAdicionar.findIndex(
				(criterio) => criterio.id_criterio == target.value && criterio.id_questao == this.idQuestao
			);
			if (criterioEmListaIndex >= 0) {
				console.log("O item consta na lista para remoção");
				this.criteriosParaAdicionar.splice(criterioEmListaIndex, 1);
				console.log("O item foi removido")
				console.log(this.criteriosParaAdicionar);
				console.log(this.criteriosParaRemover);
			}

			if (this.verificarItemLista(target.value, this.idQuestao)) {
				console.log(`Valor: ${target.checked} e id: ${target.value}`);

				if (!(this.criteriosParaRemover.find((criterioQuestao) => criterioQuestao.id_criterio == target.value)))
					this.criteriosParaRemover.push({ id_questao: this.idQuestao, id_criterio: target.value, id_atividade: this.idAtividade });
			}
		}

		console.log("itens para adicionar: ");
		console.log(this.criteriosParaAdicionar);
		console.log("itens para remover: ");
		console.log(this.criteriosParaRemover);
	}

	verificarItemLista(idCriterioBusca: number, idQuestaoBusca: number): boolean {
		let obj = this.criteriosQuestao.find((criterioQuestao) => criterioQuestao.id_criterio == idCriterioBusca && criterioQuestao.id_questao == idQuestaoBusca);

		console.log("O objeto buscado é:");
		console.log(obj);

		if (this.criteriosQuestao.find((criterioQuestao) => criterioQuestao.id_criterio == idCriterioBusca && criterioQuestao.id_questao == idQuestaoBusca)) {
			console.log("O item já está cadastrado!");
			return true;
		}
		else {
			console.log("O item não está cadastrado!");
			return false;
		}
	}
}
