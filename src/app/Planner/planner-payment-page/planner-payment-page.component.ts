import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'Services/payment.service';
import { Payments } from 'Models/Models/payments';
@Component({
  selector: 'app-planner-payment-page',
  templateUrl: './planner-payment-page.component.html',
  styleUrls: ['./planner-payment-page.component.css']
})
export class PlannerPaymentPageComponent implements OnInit {
 payments=new Payments();
  plannerpayment=new PaymentService();
  selected=false;
  paym=true;

  constructor(private route:Router) { }

  ngOnInit() {
    if(localStorage.getItem("plannerlogin")==null)
    {
      this.route.navigate(['/','Home']);
    }
  }
  check(event)
  {
    if(event.target.value=="Card")
    {
      this.payments.PaymentMode=event.target.value;
      console.log(event.target.value)
    this.paym=false;
    this.selected=true;
    }
    else if(event.target.value=="NetBanking")
    {
      this.payments.PaymentMode=event.target.value;
      console.log(event.target.value)
    this.paym=true;
    this.selected=true;
    }
  }
  makepay()
  {
    alert("yuuio");
    this.payments.Amount=1000000;
    this.payments.Planner_Id=localStorage.getItem("PlannerLogin");
    this.plannerpayment.plannerPayment(this.route,this.payments);
    console.log(this.payments);
   // this.route.navigate(['/','PlannerHome']);
  }
  

}
