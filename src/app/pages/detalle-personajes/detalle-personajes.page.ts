import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.page.html',
  styleUrls: ['./detalle-personajes.page.scss'],
})
export class DetallePersonajesPage implements OnInit {

  character:any = null;
  listadoComics: any = [];
  listadoComicsPersonaje: any = [];

  pageTitle= '';
  image = 'marvel.png';
  pageIcon = `../../assets/img/${this.image}`;

  constructor(private activateRoute: ActivatedRoute, private marvelService: MarvelService) { 
    this.getPersonaje();
  }

  ngOnInit() {
    console.log(this.character);

  }

  getPersonaje(): void{
    this.activateRoute.queryParams.subscribe(params => {
      this.character = JSON.parse(params['character']);
    })
  }

}
