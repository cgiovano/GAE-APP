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
  turmaSelecionada: Turma = {id: 0, serie: "", identificacao: "", ano_id: 0};
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
    return (anoLetivo?.ano);
  }

  carregarListaAnoLetivo() {
    this.anoLetivoService.listarTodos().subscribe((dados) => {this.anosLetivos = dados; console.log(dados)});
  }

  carregarListaTurmas() {
    this.turmaService.listarTodos().subscribe((dados) => {this.turmas = dados; console.log(dados)});
  }

  iniciarModalCadastrar(modal: ModalComponent) {
    modal.Abrir("Cadastrando nova turma");
  }

  iniciarModalEditar(modal: ModalComponent, turma: Turma) {
    this.turmaSelecionada = turma;
    modal.Abrir("Editando turma");
  }
}
