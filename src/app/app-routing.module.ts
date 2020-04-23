import { BookComponent } from './book/book.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { ProfileComponent } from './profile/profile.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { UserPersonaComponent } from './user-persona/user-persona.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Book',component: BookComponent },
  { path: 'WorkBench',component: WorkbenchComponent },
  { path: 'Add_Vehicle',component: AddVehicleComponent },
  { path: 'Profile',component: ProfileComponent },
  { path: 'User_Persona',component: UserPersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
