import { Component, EventEmitter, Output } from '@angular/core';
import { AnoLetivo } from '../../../shared/models/ano_letivo.model';
import { AnoLetivoService } from '../../../services/featuresServices/AnoLetivoService';

@Component({
	selector: 'app-cadastrar-ano-letivo',
	templateUrl: './cadastrar-ano-letivo.component.html',
	styleUrl: './cadastrar-ano-letivo.component.css'
})

export class CadastrarAnoLetivoComponent {
	@Output() cadastroConcluido = new EventEmitter<void>();

	anoLetivo: AnoLetivo = { id: 0, ano: '' };

	constructor(private anoLetivoService: AnoLetivoService) {}

	Cadastrar() {
		this.anoLetivoService.criar(this.anoLetivo).subscribe(() => {this.cadastroConcluido.emit(); this.anoLetivo={ id: 0, ano: '' };});
	}
}
