import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TurmaService } from '../../../services/featuresServices/TurmaService';
import { AnoLetivoService } from '../../../services/featuresServices/AnoLetivoService';
import { AnoLetivo } from '../../../shared/models/ano_letivo.model';
import { Turma } from '../../../shared/models/turma.model';

@Component({
	selector: 'app-cadastrar-turma',
	templateUrl: './cadastrar-turma.component.html',
	styleUrl: './cadastrar-turma.component.css'
})
export class CadastrarTurmaComponent {
	@Input() anosLetivos: AnoLetivo[];
	@Output() cadastroConcluido = new EventEmitter<void>();

	turma: Turma = { id: 0, identificacao: '', serie: '', ano_id: 0 };

	constructor(private turmaService: TurmaService, private anoLetivoService: AnoLetivoService) {}

	Cadastrar() {
		this.turmaService.criar(this.turma).subscribe(()=>{this.cadastroConcluido.emit(); this.turma={ id: 0, identificacao: '', serie: '', ano_id: 0 };});
	}

	anoLetivoSelecionado(event: any) {
		this.turma.ano_id = Number(event.target.value);
	}
}
