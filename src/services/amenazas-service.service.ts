import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ThreatAmenaza {
  amenaza: string;
  cantidad: number;
}

interface ThreatAmenazaComplete {
  amenaza: string;
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
export class AmenazasService {
  private apiUrl = 'https://plataformaamenazasapi20240720234428.azurewebsites.net/PlataformaAmenazas/AmenazasMasActivas';

  constructor(private http: HttpClient) { }

  getThreats(): Observable<ThreatAmenaza[]> {
    return this.http.get<ThreatAmenaza[]>(this.apiUrl);
  }

  getThreatsByCant(cant: number ): Observable<ThreatAmenazaComplete[]> {
    return this.http.get<ThreatAmenazaComplete[]>(this.apiUrl + '/' + cant);
  }
}
