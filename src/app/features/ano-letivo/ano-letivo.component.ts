import { Component, OnInit } from '@angular/core';
import { AnoLetivo } from '../../shared/models/ano_letivo.model';
import { AnoLetivoService } from '../../services/featuresServices/AnoLetivoService';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
	selector: 'app-ano-letivo',
	templateUrl: './ano-letivo.component.html',
	styleUrl: './ano-letivo.component.css'
})
export class AnoLetivoComponent implements OnInit {
	anoLetivoSelecionado: AnoLetivo;
	anoLetivoLista: AnoLetivo[] = [];

	constructor(private anoLetivoService: AnoLetivoService) { }

	ngOnInit(): void {
		this.carregarListaAnoLetivo();
	}

	onResolvido(modal: ModalComponent) {
		modal.Fechar();
		this.carregarListaAnoLetivo();
	}

	carregarListaAnoLetivo() {
		this.anoLetivoService.listarTodos().subscribe({
			next: (dados) => (this.anoLetivoLista = dados),
			error: (e) => console.log('Erro no processamento da requisição' + e)
		});
	}

	excluir(id: number) {
		this.anoLetivoService.excluir(id).subscribe({
			next: () => console.log('Registro deletado com sucesso!'),
			error: (e) => console.log('Erro no processamento da requisição: ' + e)
		});
	}

	iniciarModalEditar(modal: ModalComponent, anoLetivoSelecionado: AnoLetivo) {
		this.anoLetivoSelecionado = anoLetivoSelecionado;
		modal.Abrir(`Editando registro de "${anoLetivoSelecionado.ano}(id: ${anoLetivoSelecionado.id})`);
	}

	iniciarModalCadastrar(modal: ModalComponent) {
		modal.Abrir("Cadastrando novo ano letivo");
	}
}
