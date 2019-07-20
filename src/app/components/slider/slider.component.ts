import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public widthSlider: number;

  @Input() anchura:number;
  @Input('etiquetas') captions:boolean;

  constructor() { }

  ngOnInit() {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
  }

}
