import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {

  private subscription_data: Subscription
  private subscription_route: Subscription;

  public educations: any[];

  constructor(private data: DataService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.subscription_route = this.route.parent.params.subscribe(params => {
      this.subscription_data = this.data.getList(params["lang"], "education").subscribe(result => {
        this.educations = result;
      });
    })
  }

  ngOnDestroy() {
    this.subscription_data.unsubscribe();
    this.subscription_route.unsubscribe();
  }
}
