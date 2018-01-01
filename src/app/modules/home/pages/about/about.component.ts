import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from './../../../../animations/fade.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ fadeInAnimation ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
