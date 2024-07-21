import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ThreatVulnerabilidad {
  vulnerabilidad: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})

export class VulnerabilidadesService {
  private apiUrl = 'http://localhost:5183/PlataformaAmenazas/VulnerabilidadesMasActivas';

  constructor(private http: HttpClient) { }

  getThreats(): Observable<ThreatVulnerabilidad[]> {
    return this.http.get<ThreatVulnerabilidad[]>(this.apiUrl);
  }
}
