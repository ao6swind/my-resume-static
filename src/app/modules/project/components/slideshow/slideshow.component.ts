import { Component, OnInit, Input } from '@angular/core';
import { Carousel } from './../../../../plugin/carousel';
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
    let carousels = document.querySelectorAll('.carousel, .hero-carousel');
    if (carousels) {
      for(let i = 0; i <= carousels.length - 1; i++){
        new Carousel(carousels[i]);
      }
    }
  }
}
