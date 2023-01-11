import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle = 'Home';
  image = 'home.png'
  pageIcon = `../../assets/img/${this.image}`;
  
  constructor() { }

  ngOnInit() {
  }

}
