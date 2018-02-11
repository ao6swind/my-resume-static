import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './../../../../animations/fade.animation';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [ fadeAnimation ]
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
