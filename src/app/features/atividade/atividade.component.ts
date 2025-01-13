import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Atividade } from '../../shared/models/atividade.model';
import { UrlBaseService } from '../../services/UrlBaseService';
import { AtividadeService } from '../../services/featuresServices/AtividadeService';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrl: './atividade.component.css'
})
export class AtividadeComponent implements OnInit {
  atividades: Atividade[] = [];

  constructor(private atividadeService: AtividadeService) { }

  ngOnInit(): void {
    this.listarAtividades();
  }

  abrirModal(modal: ModalComponent) {
    modal.Abrir("Cadastrando nova atividade");
  }

  fecharModal(modal: ModalComponent) {
    modal.Fechar();
  }

  listarAtividades() {
    this.atividadeService.listarTodos().subscribe(dados => this.atividades = dados);
  }

  Excluir(id: number) {
    console.log(id);
    this.atividadeService.excluir(id).subscribe(()=>this.listarAtividades());
  }
}
