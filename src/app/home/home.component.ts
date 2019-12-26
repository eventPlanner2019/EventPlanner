import { Component, OnInit } from '@angular/core';
import { Valid } from 'Models/valid';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valids=new Valid();
  constructor(private route:Router) { }

  ngOnInit() {
  }
  nav()
  {
    this.route.navigate(['/','usp'])
  }
}
