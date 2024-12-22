import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnoLetivo } from '../../models/ano_letivo';
import { UrlBaseService } from '../../UrlBaseService';

@Component({
  selector: 'app-editar-ano-letivo',
  templateUrl: './editar-ano-letivo.component.html',
  styleUrl: './editar-ano-letivo.component.css'
})
export class EditarAnoLetivoComponent implements OnInit {
  id: number = 0;
  anoLetivo: AnoLetivo = {id: 0, ano: ''};

  constructor(private httpClient: HttpClient, private router: Router, private activetedRoute: ActivatedRoute, private urlBase: UrlBaseService) {}

  ngOnInit(): void {
    this.id = Number(this.activetedRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.httpClient.get<AnoLetivo>(`${this.urlBase.getUrl()}/ano-letivo/${this.id}`).subscribe(dados => this.anoLetivo = dados);
    console.log(this.anoLetivo);
  }

  Atualizar() {
    this.httpClient.put(`${this.urlBase.getUrl()}/ano-letivo/editar/${this.id}`, this.anoLetivo).subscribe(() => this.router.navigate(['ano-letivo']));
  }

  Cancelar() {
    this.router.navigate(['ano-letivo']);
  }
}
