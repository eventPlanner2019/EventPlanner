import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Router } from '@angular/router';
import { Valid } from 'Models/valid';
import { UserPlayment } from 'Models/user-playment';
import { PaymentService } from 'Services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
userpayment=new UserPlayment();
paymentService=new PaymentService();
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
      this.userpayment.paymentmode=event.target.value;
      console.log(event.target.value)
    this.paym=false;
    this.selected=true;
    }
    else if(event.target.value=="NetBanking")
    {
      this.userpayment.paymentmode=event.target.value;
      console.log(event.target.value)
    this.paym=true;
    this.selected=true;
    }
  }
  payment()
  {
    this.userpayment.amount=100000;
   this.userpayment.userid=localStorage.getItem("userlogin");
    //localStorage.setItem("subscribed","true");
    this.paymentService.userPayment(this.route,this.userpayment);
   


  }
}
