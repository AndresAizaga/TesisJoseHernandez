import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ThreatVulnerabilidad {
  vulnerabilidad: string;
  cantidad: number;
}

interface ThreatVulnerabilidadComplete {
  vulnerabilidad: string;
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

export class VulnerabilidadesService {
  private apiUrl = 'https://plataformaamenazasapi20240720234428.azurewebsites.net/PlataformaAmenazas/VulnerabilidadesMasActivas';

  constructor(private http: HttpClient) { }

  getThreats(): Observable<ThreatVulnerabilidad[]> {
    return this.http.get<ThreatVulnerabilidad[]>(this.apiUrl);
  }

  getThreatsByCant(cant: number ): Observable<ThreatVulnerabilidadComplete[]> {
    return this.http.get<ThreatVulnerabilidadComplete[]>(this.apiUrl + '/' + cant);
  }
}
