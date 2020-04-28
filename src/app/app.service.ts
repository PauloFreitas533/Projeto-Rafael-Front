import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  empresasUrl = 'http://localhost:8080/empresas';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Array<any>>(this.empresasUrl);
  }

  criar(empresa: any) {
    return this.http.post(this.empresasUrl, empresa);
  }
}