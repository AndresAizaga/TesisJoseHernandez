import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ThreatIntrusiones {
  intrusion: string;
  descripcion: string;
  nivel_gravedad: string;
  vectores_ataque: string;
  componentes: string;
  mitigacion: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class IntrusionesService {
  private apiUrl = 'https://plataformaamenazasapi20240720234428.azurewebsites.net/PlataformaAmenazas/IntrusionesIdentificadas';

  constructor(private http: HttpClient) { }

  getThreats(): Observable<ThreatIntrusiones[]> {
    return this.http.get<ThreatIntrusiones[]>(this.apiUrl);
  }

}
