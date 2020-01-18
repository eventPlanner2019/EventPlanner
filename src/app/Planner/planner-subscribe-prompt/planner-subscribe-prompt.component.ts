import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planner-subscribe-prompt',
  templateUrl: './planner-subscribe-prompt.component.html',
  styleUrls: ['./planner-subscribe-prompt.component.css']
})
export class PlannerSubscribePromptComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  plannerPaymentPage()
  {
    this.route.navigate(['/','plannerpaymentpage'])
  }

}
