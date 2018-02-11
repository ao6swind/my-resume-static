import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';
import { fadeAnimation } from './../../animations/fade.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ fadeAnimation ]
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription_route: Subscription;

  constructor(private route: ActivatedRoute, private translate: TranslateService) { 
    
  }

  ngOnInit() {
    this.subscription_route = this.route.params.subscribe(params => {
      this.translate.use(params['lang']);
    });
  }

  ngOnDestroy() {
    this.subscription_route.unsubscribe();
  }
}
