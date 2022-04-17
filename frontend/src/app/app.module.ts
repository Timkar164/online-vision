import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemModule } from './system/system.module';
import { SwiperModule } from "swiper/angular";
import { GazeDetectorService } from './shared/services/gaze-detector';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SystemModule,
    SwiperModule
  ],
  providers: [GazeDetectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
