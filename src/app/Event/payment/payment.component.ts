import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Router } from '@angular/router';
import { Valid } from 'Models/valid';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  selected=false;
  paym=true;
  valid=new Valid();
  constructor(private route:Router) { }

  ngOnInit() {
    if(localStorage.getItem("userlogin")===null)
    {
      this.route.navigate(['/','Home']);
    }
  }
  check(event)
  {
    if(event.target.value=="Card")
    {
      console.log(event.target.value)
    this.paym=false;
    this.selected=true;
    }
    else if(event.target.value=="NetBanking")
    {
      console.log(event.target.value)
    this.paym=true;
    this.selected=true;
    }
  }
  payment()
  {
    localStorage.setItem("subscribed","true");
    this.route.navigate(['/','userhome']);
  }
}
