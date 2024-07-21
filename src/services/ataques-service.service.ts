import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ThreatAtaques {
  ataque: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class AtaquesService {
  private apiUrl = 'http://localhost:5183/PlataformaAmenazas/AtaquesRecibidos';

  constructor(private http: HttpClient) { }

  getThreats(): Observable<ThreatAtaques[]> {
    return this.http.get<ThreatAtaques[]>(this.apiUrl);
  }
}
