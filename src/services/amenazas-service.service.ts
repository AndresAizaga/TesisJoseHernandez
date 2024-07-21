import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Threat {
  amenaza: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class AmenazasService {
  private apiUrl = 'https://plataformaamenazasapi20240720234428.azurewebsites.net/PlataformaAmenazas/AmenazasMasActivas';

  constructor(private http: HttpClient) { }

  getThreats(): Observable<Threat[]> {
    return this.http.get<Threat[]>(this.apiUrl);
  }
}
