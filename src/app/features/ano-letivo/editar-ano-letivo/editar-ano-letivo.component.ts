import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AnoLetivoService } from '../../../services/featuresServices/AnoLetivoService';
import { AnoLetivo } from '../../../shared/models/ano_letivo.model';

@Component({
	selector: 'app-editar-ano-letivo',
	templateUrl: './editar-ano-letivo.component.html',
	styleUrl: './editar-ano-letivo.component.css'
})
export class EditarAnoLetivoComponent implements OnChanges {
	@Input() anoLetivoSelecionado: AnoLetivo;
	@Output() atualizacaoConcluida = new EventEmitter<void>();

	anoLetivo: AnoLetivo = { id: 0, ano: '' };

	constructor(private anoLetivoService: AnoLetivoService) {}

	ngOnChanges(changes: SimpleChanges): void {
		this.anoLetivo = this.anoLetivoSelecionado;
	}

	Atualizar() {
		this.anoLetivoService.atualizar(this.anoLetivo.id, this.anoLetivo).subscribe({
			next: () => this.atualizacaoConcluida.emit(),
			error: (e) => console.log('Falha no processamento da requisição: ' + e)
		});
	}
}
