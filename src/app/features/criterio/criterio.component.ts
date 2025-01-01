import { Component, OnInit } from '@angular/core';
import { Criterio } from '../../shared/models/criterio.model';
import { CriterioService } from '../../services/featuresServices/CriterioService';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-criterio',
  templateUrl: './criterio.component.html',
  styleUrl: './criterio.component.css'
})

export class CriterioComponent implements OnInit {
  criterioSelecionado: Criterio;
  criterios: Criterio[] = [];

  constructor(private criterioService: CriterioService) { }

  ngOnInit(): void {
    this.carregarListaCriterios();
  }

  carregarListaCriterios() {
    this.criterioService.listarTodos().subscribe( (dados) => this.criterios = dados );
  }

  onResolvido(modal: ModalComponent) {
    modal.Fechar();
    this.carregarListaCriterios();
  }

  iniciarModalCadastrar(modal: ModalComponent) {
    modal.Abrir("Cadastrando novo criterio");
  }

  iniciarModalEditar(modal: ModalComponent, criterio: Criterio) {
    this.criterioSelecionado = criterio;
    modal.Abrir(`Edtando criterio id: ${this.criterioSelecionado.id}, descricao: ${this.criterioSelecionado.descricao}`);
  }

  ExcluirCriterio(id: number) {
    this.criterioService.excluir(id).subscribe(() => this.carregarListaCriterios());
  }

  ObterTipoDeEscala(isLikert: boolean) {
    let res = isLikert ? "true" : "false";
    return(res);
  }
}
