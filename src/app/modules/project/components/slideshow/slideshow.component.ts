import { Component, OnInit, Input } from '@angular/core';
import { bulmaCarousel } from 'bulma-extensions/';
//import { Carousel } from './../../../../plugin/carousel';
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input() code: string;
  @Input() images: any[];

  private content: any;
  private items: any[];
  private current_image: number;
  constructor() { }

  ngOnInit() {
    /******************************************
     * 20180805: 
     * 不知道bulma哪次更新大改extension的html與js邏輯
     * 偷懶就直接import他們release出來的js
    let carousels = document.querySelectorAll('.carousel, .hero-carousel');
    if (carousels) {
      for(let i = 0; i <= carousels.length - 1; i++){
        new Carousel(carousels[i]);
      }
    }
     ******************************************/
    var carousels = bulmaCarousel.attach();
  }
}
