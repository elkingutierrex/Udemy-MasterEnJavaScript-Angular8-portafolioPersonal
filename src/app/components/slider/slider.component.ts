import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() {

    this.autor= {
      nombre: "elkingutierrex",
      website: "elkin.gutirrex@gmail.com"
    }
  }

  ngOnInit() {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
  }

  lanzar(event){
    console.log(event)
    this.conseguirAutor.emit(this.autor);
  }

}
