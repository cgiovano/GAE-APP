import { Component, OnInit } from '@angular/core';
import { Turma } from '../../shared/models/turma.model';
import { Router } from '@angular/router';
import { AnoLetivo } from '../../shared/models/ano_letivo.model';
import { TurmaService } from '../../services/featuresServices/TurmaService';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { AnoLetivoService } from '../../services/featuresServices/AnoLetivoService';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css'
})
export class TurmaComponent implements OnInit {

  //https://www.telerik.com/blogs/angular-basics-how-to-get-value-selected-dropdown-menu-item
  turmaSelecionada: Turma;
  turmas: Turma[] = [];
  anosLetivos: AnoLetivo[] = []

  constructor(private turmaService: TurmaService, private anoLetivoService: AnoLetivoService) { }

  ngOnInit(): void {
    this.carregarListaTurmas();
    this.carregarListaAnoLetivo();
  }

  excluir(id: number) {
    this.turmaService.excluir(id).subscribe(() => this.carregarListaTurmas());
  }

  onResolvido(modal: ModalComponent) {
    modal.Fechar();
    this.carregarListaTurmas();
  }

  descobrirAnoLetivo(id: number) {
    const anoLetivo = this.anosLetivos.find((ano) => ano.id === id);
    console.log(anoLetivo?.ano);
    return (anoLetivo?.ano);
  }

  carregarListaAnoLetivo() {
    this.anoLetivoService.listarTodos().subscribe({
      next: (dados) => this.anosLetivos = dados,
      error: (e) => console.log("Erro no processamento da requisição: " + e)
    });
  }

  carregarListaTurmas() {
    this.turmaService.listarTodos().subscribe({
      next: (dados) => this.turmas = dados,
      error: (e) => console.log("Erro no processamento da requisição: " + e)
    });
  }

  iniciarModalCadastrar(modal: ModalComponent) {
    modal.Abrir("Cadastrando nova turma");
  }

  iniciarModalEditar(modal: ModalComponent, turmaSelecionada: Turma) {
    this.turmaSelecionada = turmaSelecionada;
    modal.Abrir("Editando turma");
  }
}
