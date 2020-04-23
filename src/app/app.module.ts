import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { SpotlistComponent } from './spotlist/spotlist.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { ProfileComponent } from './profile/profile.component';
import { BookComponent } from './book/book.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { FormsModule } from '@angular/forms';
import { UserPersonaComponent } from './user-persona/user-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    SpotlistComponent,
    WorkbenchComponent,
    ProfileComponent,
    BookComponent,
    AddVehicleComponent,
    UserPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
