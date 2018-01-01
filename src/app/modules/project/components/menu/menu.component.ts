import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() catelogs: any[];
  @Input() tags: any[];

  @Output() onCatelogFilterEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() onTagFilterEvent: EventEmitter<string> = new EventEmitter<string>();

  public isMenuOpened: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showMeun() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  catelogFilter(catelog: string){
    this.onCatelogFilterEvent.emit(catelog);
    this.isMenuOpened = false;
  }

  tagFilter(tag: string){
    this.onTagFilterEvent.emit(tag);
    this.isMenuOpened = false;
  }
}
