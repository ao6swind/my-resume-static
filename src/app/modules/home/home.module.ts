import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from './../layout/layout.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeComponent } from './home.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillComponent } from './components/skill/skill.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ProfileComponent } from './components/profile/profile.component';

export function HttpLoaderFactory(http: HttpClient) {
  //return new TranslateHttpLoader(http);
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  declarations: [
    HomeComponent, 
    IndexComponent, 
    AboutComponent, 
    EducationComponent, 
    IntroductionComponent, ExperienceComponent, SkillComponent, CertificationComponent, ProfileComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
