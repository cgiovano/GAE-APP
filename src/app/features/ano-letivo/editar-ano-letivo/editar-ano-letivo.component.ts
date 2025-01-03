import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AnoLetivoService } from '../../../services/featuresServices/AnoLetivoService';
import { AnoLetivo } from '../../../shared/models/ano_letivo.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-editar-ano-letivo',
	templateUrl: './editar-ano-letivo.component.html',
	styleUrl: './editar-ano-letivo.component.css'
})
export class EditarAnoLetivoComponent {
	@Input() anoLetivo: AnoLetivo;
	@Output() atualizacaoConcluida = new EventEmitter<void>();

	//anoLetivo: AnoLetivo;

	constructor(private anoLetivoService: AnoLetivoService) {}

	Atualizar() {
		this.anoLetivoService.atualizar(this.anoLetivo.id, this.anoLetivo).subscribe(()=>this.atualizacaoConcluida.emit());
	}
}
