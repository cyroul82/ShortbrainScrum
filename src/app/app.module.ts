import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductbacklogComponent } from './productbacklog/productbacklog.component';
import { ProductbacklogListComponent } from './productbacklog/productbacklog-list/productbacklog-list.component';
import { SprintplanningComponent } from './sprintplanning/sprintplanning.component';
import { SprintplanningListComponent } from './sprintplanning/sprintplanning-list/sprintplanning-list.component';
import { ProductbacklogItemComponent } from './productbacklog/productbacklog-list/productbacklog-item/productbacklog-item.component';
import { SprintplanningItemComponent } from './sprintplanning/sprintplanning-list/sprintplanning-item/sprintplanning-item.component';
import { HeaderComponent } from './header/header.component';
import { ProductbacklogControlComponent } from './productbacklog/productbacklog-control/productbacklog-control.component';
import { SprintplanningControlComponent } from './sprintplanning/sprintplanning-control/sprintplanning-control.component';
import { SprintplanningDetailComponent } from './sprintplanning/sprintplanning-detail/sprintplanning-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductbacklogComponent,
    ProductbacklogListComponent,
    SprintplanningComponent,
    SprintplanningListComponent,
    ProductbacklogItemComponent,
    SprintplanningItemComponent,
    HeaderComponent,
    ProductbacklogControlComponent,
    SprintplanningControlComponent,
    SprintplanningDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
