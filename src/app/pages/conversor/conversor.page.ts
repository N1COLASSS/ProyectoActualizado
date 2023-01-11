import { Component, OnInit } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  pageTitle = 'Conversor';
  image = 'conversorr.png';
  pageIcon = `../../assets/img/${this.image}`

  listarSymbols: any = [];
  

  constructor(private conversorService: ConversorService) { }

  ngOnInit() {
    this.getListarSymbols();
  }

  getListarSymbols(event?:any) {
    this.conversorService.getListadoSymbols()
    .then(data => {
      this.listarSymbols = data;
      console.log(this.listarSymbols);

      if(event){
        event.tarjet.compplete();
      }
    },
    (error) => {
      console.error(error);
    });
  }

}

