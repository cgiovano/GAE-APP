import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Atividade } from '../../shared/models/atividade.model';
import { UrlBaseService } from '../../services/UrlBaseService';
import { AtividadeService } from '../../services/featuresServices/AtividadeService';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-atividade',
    templateUrl: './atividade.component.html',
    styleUrl: './atividade.component.css',
    standalone: false
})
export class AtividadeComponent implements OnInit {
  atividades: Atividade[] = [];
  idAtividadeSelecionada: number = 0;
  eventoFechar: EventEmitter<void> = new EventEmitter<void>();

  constructor(private atividadeService: AtividadeService) { }

  ngOnInit(): void {
    this.listarAtividades();
  }

  abrirModal(modal: ModalComponent, titulo: string, id: number) {
    console.log("o id da atividade é: " + id);
    this.idAtividadeSelecionada = id;
    modal.Abrir(titulo);
  }

  fecharModal(modal: ModalComponent | undefined) {
    if(modal != undefined)
      modal.Fechar();
    else
      this.eventoFechar.emit();
  }

  listarAtividades() {
    this.atividadeService.listarTodos().subscribe(dados => this.atividades = dados);
  }

  Excluir(id: number) {
    console.log(id);
    this.atividadeService.excluir(id).subscribe(()=>this.listarAtividades());
  }
}
