import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor() {}

  ngOnInit(){

    let numero = 10;

    numero = 20;
    
    numero += 10;

    numero = 0;

    console.log(numero);
  }
}
