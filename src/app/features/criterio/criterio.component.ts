import { Component, OnInit } from '@angular/core';
import { Criterio } from '../../shared/models/criterio.model';
import { CriterioService } from '../../services/featuresServices/CriterioService';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ItemCriterioService } from '../../services/featuresServices/ItemCriterioService';
import { ItemCriterio } from '../../shared/models/item_criterio.model';

@Component({
    selector: 'app-criterio',
    templateUrl: './criterio.component.html',
    styleUrl: './criterio.component.css',
    standalone: false
})

export class CriterioComponent implements OnInit {
  criterioSelecionado: Criterio;
  criterios: Criterio[] = [];
  listaItemCriterio: ItemCriterio[] = [];

  constructor(private criterioService: CriterioService, private itemCriterioService: ItemCriterioService) { }

  ngOnInit(): void {
    this.carregarListaCriterios();
  }

  carregarListaCriterios() {
    this.criterioService.listarTodos().subscribe( (dados) => {
      this.criterios = dados; this.itemCriterioService.listarTodos().subscribe((itens) => {
        this.listaItemCriterio = itens;
      });
    });
  }

  listarItensCriterios(id: number): ItemCriterio[] {
    console.log(this.listaItemCriterio.filter((item) => item.id_criterio === id));
    return this.listaItemCriterio.filter((item) => item.id_criterio === id);
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
    modal.Abrir(`Editando criterio id: ${this.criterioSelecionado.id}, descricao: ${this.criterioSelecionado.descricao}`);
  }

  ExcluirCriterio(id: number) {
    this.criterioService.excluir(id).subscribe(() => this.carregarListaCriterios());
  }

  ObterTipoDeEscala(isLikert: boolean) {
    let res = isLikert ? "true" : "false";
    return(res);
  }
}
