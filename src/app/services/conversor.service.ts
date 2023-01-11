import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  urlEndPoint: string= 'https://api.exchangerate.host/'

  constructor(private httpClient: HttpClient) { }

  getListadoSymbols(): Promise<any> { 
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.urlEndPoint}latest`)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error: (error) => reject(error),
        complete: () => console.log('Complete')
      })
    })
  }
}
