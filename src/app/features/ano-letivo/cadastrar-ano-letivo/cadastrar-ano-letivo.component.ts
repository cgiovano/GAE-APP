import { Component } from '@angular/core';
import { AnoLetivo } from '../../../shared/models/ano_letivo.model';
import { AnoLetivoService } from '../../../services/featuresServices/AnoLetivoService';

@Component({
	selector: 'app-cadastrar-ano-letivo',
	templateUrl: './cadastrar-ano-letivo.component.html',
	styleUrl: './cadastrar-ano-letivo.component.css'
})
export class CadastrarAnoLetivoComponent {
	anoLetivo: AnoLetivo = { id: 0, ano: '' };

	constructor(private anoLetivoService: AnoLetivoService) {}

	Cadastrar() {
		this.anoLetivoService.criar(this.anoLetivo).subscribe({
			next: (dados) => console.log(`O item ${dados} foi cadastrado com sucesso!`),
			error: (e) => console.log('Erro no processamento da requisição: ' + e)
		});
	}
}
