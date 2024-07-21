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
  private apiUrl = 'https://plataformaamenazasapi20240720234428.azurewebsites.net/PlataformaAmenazas/VulnerabilidadesMasActivas';

  constructor(private http: HttpClient) { }

  getThreats(): Observable<ThreatVulnerabilidad[]> {
    return this.http.get<ThreatVulnerabilidad[]>(this.apiUrl);
  }
}
