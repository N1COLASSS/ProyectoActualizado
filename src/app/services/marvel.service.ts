import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  urlEndPoint = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7d64bbf9b7f563343f72db569282b457&hash=c212c8e2d91260af0e592a3ef12ce4fa'
  
  constructor(private httpClient:HttpClient) { }

  getListadoPersonajes(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(this.urlEndPoint)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error:  (error) => reject(error),
        complete: () => console.log('Complete')
      })
    })
  }



}

