import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TurmaService } from '../../../services/featuresServices/TurmaService';
import { AnoLetivoService } from '../../../services/featuresServices/AnoLetivoService';
import { AnoLetivo } from '../../../shared/models/ano_letivo.model';
import { Turma } from '../../../shared/models/turma.model';

@Component({
	selector: 'app-cadastrar-turma',
	templateUrl: './cadastrar-turma.component.html',
	styleUrl: './cadastrar-turma.component.css'
})
export class CadastrarTurmaComponent implements OnInit {
	turma: Turma = { id: 0, identificacao: '', serie: '', ano_id: 0 };
	anosLetivos: AnoLetivo[] = [];

	constructor(private turmaService: TurmaService, private anoLetivoService: AnoLetivoService) {}

	ngOnInit(): void {
		this.anoLetivoService.listarTodos().subscribe({
			next: (dados) => (this.anosLetivos = dados),
			error: (e) => console.log('Erro no processamento da requisição: ' + e)
		});
	}

	Cadastrar() {
		this.turmaService.criar(this.turma).subscribe({
			next: () => console.log('turma cadastrada com sucesso!'),
			error: (e) => console.log('Erro no processamento da requisição: ' + e)
		});
	}

	anoLetivoSelecionado(event: any) {
		this.turma.ano_id = Number(event.target.value);
	}
}
