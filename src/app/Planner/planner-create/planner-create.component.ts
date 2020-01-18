import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-your-event',
  templateUrl: './planner-create.component.html',
  styleUrls: ['./planner-create.component.css']
})

export class PlannerCreateComponent implements OnInit {
  events:Array<String>= ['Birthdays','Official Party','Promotional events','Weddings'];
  services:Array<String>= ['Catering','Basic Decoration','Bar','Power Backup','Guest Accomodation','Guest Transport Facilities'];
  cities:Array<String>= ['Banglore','Delhi','Noida','Jaipur','Kanpur','Lucknow'];
  selectedEventsValues = []; 
  selectedServicesValues = [];
  selectedCitiesValues = [];  
  eventsError:boolean;

  constructor(private formbuilder:FormBuilder,private route:Router) { } 
  CreateYourPage:FormGroup;

  ngOnInit() {
    this.CreateYourPage=this.formbuilder.group({
      events:this.addEvents(),
      services:this.addServices(),
      cities:this.addCities(),
      charges:['',Validators.required],
      guest:['',Validators.required],
      controla:['',Validators.required],
      controlb:['',Validators.required],
      controlc:['',Validators.required]

    });
    
  }

   addEvents()
   {
     const arr =this.events.map(element =>{
       return this.formbuilder.control(false);
     });
      return this.formbuilder.array(arr)
   }

   addServices()
   {
     const arr =this.services.map(element =>{
       return this.formbuilder.control(false);
     });
      return this.formbuilder.array(arr)
   }

   addCities()
   {
     const arr =this.cities.map(element =>{
       return this.formbuilder.control(false);
     });
      return this.formbuilder.array(arr)
   }

   

   get eventsArray()
   {
     return <FormArray>this.CreateYourPage.get('events');
   }

   get servicesArray()
   {
     return <FormArray>this.CreateYourPage.get('services');
   }

   get citiesArray()
   {
     return <FormArray>this.CreateYourPage.get('events');
   }

   getSelectedEventsValues()
   {
     this.selectedEventsValues = [];
     this.eventsArray.controls.forEach((control,i)=>{
       if(control.value)
       {
         this.selectedEventsValues.push(this.events[i]);
       }
       this.eventsError=this.selectedEventsValues.length>0?false:true;
     });

    }

    getSelectedServicesValues()
   {
     this.selectedServicesValues = [];
     this.eventsArray.controls.forEach((control,i)=>{
       if(control.value)
       {
         this.selectedServicesValues.push(this.events[i]);
       }
       this.eventsError=this.selectedServicesValues.length>0?false:true;
     });

    }

    getSelectedCitiesValues()
   {
     this.selectedEventsValues = [];
     this.eventsArray.controls.forEach((control,i)=>{
       if(control.value)
       {
         this.selectedEventsValues.push(this.events[i]);
       }
       this.eventsError=this.selectedEventsValues.length>0?false:true;
     });

    }

    resetPage()
    {
      this.route.navigate(['/','reset'])
    }

    moveToNext()
    {
      this.route.navigate(['/','subscribeprompt'])
    }
    check()
    {
      console.log(this.CreateYourPage.valid)
    }

}
