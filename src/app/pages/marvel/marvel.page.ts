import { Component, OnInit, ViewChild} from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.page.html',
  styleUrls: ['./marvel.page.scss'],
})
export class MarvelPage implements OnInit{

  pageTitle = 'Marvel';
  image = 'marvel.png';
  pageIcon = `../../assets/img/${this.image}`

  listarPersonajes: any = [];

  @ViewChild(IonInfiniteScroll) infinite!: IonInfiniteScroll;


  constructor( private marvelService: MarvelService, 
    private navController: NavController) {}

  ngOnInit() {
    this.getListarPersonajes();
    setTimeout(() => {
      this.listarPersonajes
    },3000);
  }

  getListarPersonajes(event?:any) {
    this.marvelService.getListadoPersonajes()
    .then(data => {
      this.listarPersonajes = [...this.listarPersonajes,...data.data.results];
      console.log(this.listarPersonajes);

      if(event){
        event.tarjet.compplete();
      }
    },
    (error) => {
      console.error(error);
    });
  }

  goToDetallePersonaje(character:any): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        character : JSON.stringify(character)
      }      
    };
    this.navController.navigateForward(['detalle-personajes/'],navigationExtras);
  }
  
}
