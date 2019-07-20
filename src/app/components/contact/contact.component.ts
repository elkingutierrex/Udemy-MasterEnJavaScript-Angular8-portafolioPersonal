import { Component, OnInit } from '@angular/core';
//import { $ } from 'protractor';

declare var $: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number;
  public anchuraToSlider: number;
  public captions: boolean;

  constructor() {
    this.captions = true;
   }

  ngOnInit() {
    $("#logo").click(function(e){
      e.preventDefault();

      $("header").css("background", "green")
                 .css("heigth", "50px")
    });

  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = null;
  }

}
