import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit, OnDestroy {

  private subscription_data: Subscription
  private subscription_route: Subscription;

  public introduction: any = {
    "name": "",
    "birthday": "",
    "education": "",
    "resume": ""
  };

  constructor(private data: DataService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.subscription_route = this.route.parent.params.subscribe(params => {
      this.subscription_data = this.data.getList(params["lang"], "introduction").subscribe(result => {
        this.introduction = result;
      });
    })
  }

  ngOnDestroy() {
    this.subscription_data.unsubscribe();
    this.subscription_route.unsubscribe();
  }
}
