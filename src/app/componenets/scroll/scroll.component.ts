import { Component, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styles: [
  ]
})
export class ScrollComponent {

  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);


  irFinal(){
    this.viewport.scrollToIndex( this.personas.length  );
  }

  irInicio(){
	  this.viewport.scrollToIndex( 0 );
  }

  irMitad(){
    this.viewport.scrollToIndex( this.personas.length / 2 );
  }

}
