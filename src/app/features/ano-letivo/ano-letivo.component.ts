import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AnoLetivo } from '../../shared/models/ano_letivo.model';
import { AnoLetivoService } from '../../services/featuresServices/AnoLetivoService';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ApiService } from '../../services/ApiService';
import { map, Observable } from 'rxjs';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-ano-letivo',
	templateUrl: './ano-letivo.component.html',
	styleUrl: './ano-letivo.component.css', 
})
export class AnoLetivoComponent implements OnInit {
	anoLetivoSelecionado: AnoLetivo;
	anoLetivoLista: AnoLetivo[] = [];

	constructor(private anoLetivoService: AnoLetivoService, private changeDetection: ChangeDetectorRef, private http: HttpClient) {}
	
	ngOnInit(): void {
		//this.carregarListaAnoLetivo();
		this.http.get<AnoLetivo[]>(`http://localhost:3000/ano-letivo`).subscribe((dados) => this.anoLetivoLista = dados);
	}

	onResolvido(modal: ModalComponent) {
		modal.Fechar();
		this.carregarListaAnoLetivo();
	}

	carregarListaAnoLetivo() {
		console.log("carregar ano letivo chamado!");
		this.anoLetivoService.listarTodos().subscribe(dados=>this.anoLetivoLista = dados);
	}

	excluir(id: number) {
		this.anoLetivoService.excluir(id).subscribe(() => this.carregarListaAnoLetivo());
	}

	iniciarModalEditar(modal: ModalComponent, anoLetivoSelecionado: AnoLetivo) {
		this.anoLetivoSelecionado = anoLetivoSelecionado;
		modal.Abrir(`Editando registro de "${anoLetivoSelecionado.ano}(id: ${anoLetivoSelecionado.id})`);
	}

	iniciarModalCadastrar(modal: ModalComponent) {
		modal.Abrir("Cadastrando novo ano letivo");
	}
}
