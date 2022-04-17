import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HeadComponent } from './shared/components/head/head.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';
import { MainComponent } from './main/main.component';
import { CollibrateComponent } from './collibrate/collibrate.component';
import { AuthOneComponent } from './auth-one/auth-one.component';
import { AuthTwoComponent } from './auth-two/auth-two.component';
import { RegOneComponent } from './reg-one/reg-one.component';
import { RegTwoComponent } from './reg-two/reg-two.component';
import { RegPopupComponent } from './reg-popup/reg-popup.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoLeftComponent } from './step-two-left/step-two-left.component';
import { StepTwoRightComponent } from './step-two-right/step-two-right.component';
import { StepTwoLeftThreeLeftComponent } from './step-two-left-three-left/step-two-left-three-left.component';
import { StepTwoRightThreeLeftComponent } from './step-two-right-three-left/step-two-right-three-left.component';
import { StepStaticticComponent } from './step-statictic/step-statictic.component';
import { HeadAuthComponent } from './shared/components/head-auth/head-auth.component';
import { HeadRegComponent } from './shared/components/head-reg/head-reg.component';
import { FaceDetComponent } from './face-det/face-det.component';

@NgModule({
  declarations: [
    SystemComponent,
    HeadComponent,
    FooterComponent,
    ScrollTopComponent,
    MainComponent,
    CollibrateComponent,
    AuthOneComponent,
    AuthTwoComponent,
    RegOneComponent,
    RegTwoComponent,
    RegPopupComponent,
    StepOneComponent,
    StepTwoLeftComponent,
    StepTwoRightComponent,
    StepTwoLeftThreeLeftComponent,
    StepTwoRightThreeLeftComponent,
    StepStaticticComponent,
    HeadAuthComponent,
    HeadRegComponent,
    FaceDetComponent,
  ],
  providers: [
  ],
  imports: [
    SystemRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  bootstrap: [SystemComponent]
})
export class SystemModule { }
