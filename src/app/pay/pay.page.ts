import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {

  totalToPay: string;

  constructor() { 

    this.totalToPay = '0';
  }

  ngOnInit() {
  }

  
  calculateTotal(ev: Event){
    
    console.log('yes');
    this.totalToPay = '274.000';
  }

}
