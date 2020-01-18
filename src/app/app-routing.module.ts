import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { EventsComponent } from './Event/events/events.component';
import { PlannerlistComponent } from './Event/plannerlist/plannerlist.component';
import { PaymentComponent } from './Event/payment/payment.component';
import { CreatedEventComponent } from './Event/created-event/created-event.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { PlannerCreateComponent } from './Planner/planner-create/planner-create.component';
import { PlannerSubscribePromptComponent } from './Planner/planner-subscribe-prompt/planner-subscribe-prompt.component';
import { PlannerPaymentPageComponent } from './Planner/planner-payment-page/planner-payment-page.component';
import { PlannerSignupComponent } from './Planner/planner-signup/planner-signup.component';
import { ProcessingComponent } from './processing/processing.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { PlannerPageComponent } from './Planner/planner-page/planner-page.component';
import { ViewplannerComponent } from './Event/viewplanner/viewplanner.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"usp",component:UsersignupComponent},
  {path:"Home",component:HomeComponent},
  {path:"createEvent",component:EventsComponent},
  {path:"plannerlist",component:PlannerlistComponent},
  {path:"userhome",component:UserhomeComponent},
  {path:"MakePay",component:PaymentComponent},
  {path:"CreatedEvent",component:CreatedEventComponent},
  {path:"admin",component:AdminhomeComponent},
  {path:"plannersignup", component:PlannerSignupComponent},
  {path:"createpage", component:PlannerCreateComponent},
  {path:"createevent", component:PlannerCreateComponent},
  {path:"subscribeprompt", component:PlannerSubscribePromptComponent},
  {path:"plannerpaymentpage", component:PlannerPaymentPageComponent},
  {path:"reset", component:PlannerCreateComponent},
  {path:"processing",component:ProcessingComponent},
  {path:"PlannerHome",component:PlannerPageComponent},
  {path:"viewPlan",component:ViewplannerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
