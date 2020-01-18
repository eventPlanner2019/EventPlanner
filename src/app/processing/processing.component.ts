import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
    for(var i=0;i<2000;i++)
    {

    }
    this.route.navigate(['/','Home']);
  }

}
