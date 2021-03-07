import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styles: [
  ]
})
export class DropComponent implements OnInit {

  paises: any = [];

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( paises => this.paises = paises );

  }

  drop(event: CdkDragDrop<any>){
      console.log(event);
      moveItemInArray(this.paises, event.previousIndex, event.currentIndex);
  }

}
