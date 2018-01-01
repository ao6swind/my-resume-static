import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.scss']
})
export class PluginComponent implements OnInit {

  @Input() plugins: any[];

  constructor() { }

  ngOnInit() {
  }

}
