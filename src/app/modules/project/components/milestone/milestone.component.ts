import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestoneComponent implements OnInit {

  @Input() milestones: any[];

  constructor() { }

  ngOnInit() {
  }

}
