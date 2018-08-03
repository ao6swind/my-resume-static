import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../../../../services/data.service';
import { fadeAnimation } from './../../../../animations/fade.animation';
import { Carousel } from './../../../../plugin/carousel';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [ fadeAnimation ]
})
export class DetailComponent implements OnInit, OnDestroy {

  private subscription_json_data: Subscription
  private subscription_text_data: Subscription;
  private subscription_parent_route: Subscription;
  private subscription_child_route: Subscription;

  public project: any = {
    images: []
  };
  public description: string;
  public isScrollTop: boolean;

  constructor(private data: DataService, private route: ActivatedRoute) { 
  }
  ngOnInit() {
    this.subscription_parent_route = this.route.parent.params.subscribe(parent_params => {
      this.subscription_child_route = this.route.params.subscribe(child_params=>{
        this.subscription_json_data = this.data.getDetail(parent_params["lang"], "project/list", child_params["id"]).subscribe(json_result => {
          this.project = json_result;
          this.subscription_text_data = this.data.getText(parent_params["lang"], "project/" + this.project.code).subscribe(text_result => {
            this.description = text_result.replace("\r\n", "<br>").replace("\n", "<br>").replace("\t", "　　");
          });
        });
      });
    });
  }

  ngOnDestroy() {
    this.subscription_text_data.unsubscribe();
    this.subscription_json_data.unsubscribe();
    this.subscription_child_route.unsubscribe();
    this.subscription_parent_route.unsubscribe();
  }
}