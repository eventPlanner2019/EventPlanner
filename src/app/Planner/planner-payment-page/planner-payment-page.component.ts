import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-planner-payment-page',
  templateUrl: './planner-payment-page.component.html',
  styleUrls: ['./planner-payment-page.component.css']
})
export class PlannerPaymentPageComponent implements OnInit {
  selected=false;
  paym=true;

  constructor(private route:Router) { }

  ngOnInit() {
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
  makepay()
  {
    this.route.navigate(['/','PlannerHome']);
  }

}
