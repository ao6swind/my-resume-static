import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../../../services/data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private subscription_data: Subscription
  private subscription_route: Subscription;
  
  public profile: string;

  constructor(private data: DataService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.subscription_route = this.route.parent.params.subscribe(params => {
      this.subscription_data = this.data.getText(params["lang"], "profile").subscribe(result => {
        this.profile = result;
      });
    })
  }

  ngOnDestroy() {
    this.subscription_data.unsubscribe();
    this.subscription_route.unsubscribe();
  }
}