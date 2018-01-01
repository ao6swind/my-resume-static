import { Component, OnInit, Input } from '@angular/core';

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
    
  }
}
