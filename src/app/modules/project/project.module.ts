import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { LayoutModule } from '../layout/layout.module';

import { ProjectComponent } from './project.component';
import { IndexComponent } from './pages/index/index.component';
import { DetailComponent } from './pages/detail/detail.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { DescriptionComponent } from './components/description/description.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { PluginComponent } from './components/plugin/plugin.component';
import { MilestoneComponent } from './components/milestone/milestone.component';

export function HttpLoaderFactory(http: HttpClient) {
  //return new TranslateHttpLoader(http);
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
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
  declarations: [ProjectComponent, IndexComponent, DetailComponent, MenuComponent, CardComponent, DescriptionComponent, SlideshowComponent, PluginComponent, MilestoneComponent],
  bootstrap: [ProjectComponent]
})
export class ProjectModule { }
