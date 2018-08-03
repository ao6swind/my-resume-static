import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  public language: string;
  public languages: any[] = [
    { key: 'en-us', value: 'English' },
    { key: 'zh-tw', value: '中文' }
  ];

  private subscription_route: Subscription;
  public isMenuOpened: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
    this.subscription_route = this.route.parent.params.subscribe(params => {
      this.language = params['lang'];
    });
  }

  ngOnDestroy() {
    this.subscription_route.unsubscribe();
  }

  changeLanguage(lang: string){
    let target = this.router.url.replace(this.language, lang);
    this.isMenuOpened = false;
    this.router.navigateByUrl(target);
  }

  showMeun() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
