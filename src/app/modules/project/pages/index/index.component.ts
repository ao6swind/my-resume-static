import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../../../services/data.service';
import { fadeAnimation } from './../../../../animations/fade.animation';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [ fadeAnimation ]
})
export class IndexComponent implements OnInit, OnDestroy {

  private subscription_data: Subscription
  private subscription_route: Subscription;

  public rows: any[] = [];
  public columns: any[] = [0,1,2];
  public projects: any[] = [];
  public storages: any[] = [];
  public catelogs: any[] = [];
  public tags: any[] = [];
  public language: string;
  public filter_catelog: string = '';
  public filter_tag: string = '';

  constructor(private data: DataService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    
    this.subscription_route = this.route.parent.params.subscribe(params => {
      
      this.subscription_data = this.data.getList(params["lang"], "project/list").subscribe(result => {
        this.language = params["lang"];
        this.storages = result;
        this.catelogs = [];
        this.tags = [];
        
        for(let i = 0; i <= this.storages.length - 1; i++){
          // 製作流水號
          this.storages[i].id = i+1;

          // 整理專案類型
          if(this.catelogs.indexOf(this.storages[i].catelog) < 0) 
            this.catelogs.push(this.storages[i].catelog);
          
          // 整理標籤
          for(let j = 0; j <= this.storages[i].tags.length - 1; j++){
            if(this.tags.indexOf(this.storages[i].tags[j]) < 0)
              this.tags.push(this.storages[i].tags[j]);
          }
        }
        this.projects = this.storages;
        this.orderPorjects();
      });
    })
  }

  orderPorjects(){
    this.rows = [1];
    for(let i = 0; i <= this.projects.length - 1; i++){
      // 整理grid
      if((i+1)%3 == 0 || i == 0)
        this.rows.push(i);
    }
  }

  ngOnDestroy() {
    this.subscription_data.unsubscribe();
    this.subscription_route.unsubscribe();
  }

  onCatelogFilter(catelog: string){
    this.projects = [];
    for(let i = 0; i <= this.storages.length - 1; i++){
      if(this.storages[i].catelog == catelog || catelog == '')
        this.projects.push(this.storages[i]);
    }
    this.orderPorjects();
  }

  onTagFilter(tag: string){
    this.projects = [];
    for(let i = 0; i <= this.storages.length - 1; i++){
      if(this.storages[i].tags.indexOf(tag) > -1 || tag == '')
        this.projects.push(this.storages[i]);
    }
    this.orderPorjects();
  }
}

