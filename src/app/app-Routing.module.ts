import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ScrollComponent } from './componenets/scroll/scroll.component';
import { DragComponent } from './componenets/drag/drag.component';
import { DropComponent } from './componenets/drop/drop.component';

const routes: Routes = [
  { path: 'scroll', component: ScrollComponent },
  { path: 'drag', component: DragComponent },
  { path: 'drop', component: DropComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'scroll' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting{}
