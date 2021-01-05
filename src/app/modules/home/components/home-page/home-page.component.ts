import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

   clients: number = 60;
   projects: number = 140;
   team: number = 100;
   global: number = 30;
   experience: number = 10;

   constructor() { }
   ngOnInit() {}


}
