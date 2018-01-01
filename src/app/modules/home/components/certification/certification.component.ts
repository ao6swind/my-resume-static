import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit, OnDestroy {
  
  private subscription_data: Subscription
  private subscription_route: Subscription;

  public isShowCertification: boolean = false;
  public certifications: any[];
  public certification: any = {
    "title": "",
    "acronym": "",
    "image": ""
  }

  constructor(private data: DataService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.subscription_route = this.route.parent.params.subscribe(params => {
      this.subscription_data = this.data.getList(params["lang"], "certification").subscribe(result => {
        this.certifications = result;
      });
    })
  }

  ngOnDestroy() {
    this.subscription_data.unsubscribe();
    this.subscription_route.unsubscribe();
  }

  showCertification(index: number) {
    if(index >= 0)
    {
      this.certification = this.certifications[index];  
    }
    else
    {
      this.certification = {
        "title": "",
        "acronym": "",
        "image": ""
      }
    }
    this.isShowCertification = !this.isShowCertification
  }
}
