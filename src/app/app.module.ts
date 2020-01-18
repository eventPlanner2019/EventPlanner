import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlannerlistComponent } from './Event/plannerlist/plannerlist.component';
import { EventsComponent } from './Event/events/events.component';
import { PaymentComponent } from './Event/payment/payment.component';
import { CreatedEventComponent } from './Event/created-event/created-event.component';
import { AlertModule, BsDatepickerModule } from 'ngx-bootstrap';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { PlannerSignupComponent } from './Planner/planner-signup/planner-signup.component';
import { PlannerSubscribePromptComponent } from './Planner/planner-subscribe-prompt/planner-subscribe-prompt.component';
import { PlannerPaymentPageComponent } from './Planner/planner-payment-page/planner-payment-page.component';
import { EventDetailsComponent } from './Planner/event-details/event-details.component';
import { PlannerCreateComponent } from './Planner/planner-create/planner-create.component';
import { ProcessingComponent } from './processing/processing.component';
import { PlannerPageComponent } from './Planner/planner-page/planner-page.component';
import { LogOutServiceService } from 'Services/log-out-service.service';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { ViewplannerComponent } from './Event/viewplanner/viewplanner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersignupComponent,
    EventsComponent,
    PlannerlistComponent,
    PaymentComponent,
    CreatedEventComponent,AdminhomeComponent,UserhomeComponent,
    PlannerSignupComponent,
    PlannerCreateComponent,
    PlannerSubscribePromptComponent,
    PlannerPaymentPageComponent,
    EventDetailsComponent,
    ProcessingComponent,
    PlannerPageComponent,
    ViewplannerComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,BsDatepickerModule.forRoot(),ReactiveFormsModule,AlertModule.forRoot()],
  providers: [LogOutServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
