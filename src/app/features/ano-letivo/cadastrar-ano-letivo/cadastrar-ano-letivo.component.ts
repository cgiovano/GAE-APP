import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlBaseService } from '../../UrlBaseService';
import { AnoLetivo } from '../../models/ano_letivo';

@Component({
  selector: 'app-cadastrar-ano-letivo',
  templateUrl: './cadastrar-ano-letivo.component.html',
  styleUrl: './cadastrar-ano-letivo.component.css'
})
export class CadastrarAnoLetivoComponent {
  ano: string = '';
  anoLetivo: AnoLetivo = {id: 0, ano: ''};
  constructor (private httpClient: HttpClient, private router: Router, private urlBase: UrlBaseService) {}

  Cadastrar() {
    this.anoLetivo.ano = this.ano;
    //console.log(this.anoLetivo);
    this.httpClient.post<AnoLetivo>(`${this.urlBase.getUrl()}/ano-letivo/cadastrar`, this.anoLetivo).subscribe(() => this.router.navigate(['ano-letivo']));
  } 

  Cancelar() {
    this.router.navigate(['ano-letivo']);
  }

}
