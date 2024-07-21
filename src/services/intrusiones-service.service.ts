import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ThreatIntrusiones {
  intrusion: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class IntrusionesService {
  private apiUrl = 'http://localhost:5183/PlataformaAmenazas/IntrusionesIdentificadas';

  constructor(private http: HttpClient) { }

  getThreats(): Observable<ThreatIntrusiones[]> {
    return this.http.get<ThreatIntrusiones[]>(this.apiUrl);
  }
}
