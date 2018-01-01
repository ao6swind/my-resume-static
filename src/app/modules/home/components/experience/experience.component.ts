import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {

  private subscription_data: Subscription
  private subscription_route: Subscription;

  public isShowExperience: boolean = false;
  public experiences: any[];
  public experience: any = {
    "company": "",
    "title": "",
    "from": "",
    "end": "",
    "duties": []
  }
  
  constructor(private data: DataService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.subscription_route = this.route.parent.params.subscribe(params => {
      this.subscription_data = this.data.getList(params["lang"], "experience").subscribe(result => {
        this.experiences = result;
      });
    })
  }

  ngOnDestroy() {
    this.subscription_data.unsubscribe();
    this.subscription_route.unsubscribe();
  }

  showExperience(index: number) {
    if(index >= 0)
    {
      this.experience = this.experiences[index];  
    }
    else
    {
      this.experience = {
        "company": "",
        "title": "",
        "from": "",
        "end": "",
        "duties": []
      }
    }
    this.isShowExperience = !this.isShowExperience
  }
}