import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from './../../../../animations/fade.animation';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [ fadeInAnimation ]
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
