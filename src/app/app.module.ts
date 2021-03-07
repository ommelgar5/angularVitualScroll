import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { ScrollComponent } from './componenets/scroll/scroll.component';
import { AppRouting } from './app-Routing.module';
import { DragComponent } from './componenets/drag/drag.component';
import { DropComponent } from './componenets/drop/drop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScrollComponent,
    DragComponent,
    DropComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
