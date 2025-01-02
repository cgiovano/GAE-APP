import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AnoLetivoComponent } from '../features/ano-letivo/ano-letivo.component';
import { AnoLetivoService } from './featuresServices/AnoLetivoService';

@Injectable({
  providedIn: 'root',
})
export class Resolver implements Resolve<any> {
  constructor(private genericService: AnoLetivoService) {}

  resolve(): Observable<any> {
    return this.genericService.listarTodos();
  }
}