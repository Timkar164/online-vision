import { FaceDetComponent } from './face-det/face-det.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthOneComponent } from './auth-one/auth-one.component';
import { AuthTwoComponent } from './auth-two/auth-two.component';
import { CollibrateComponent } from './collibrate/collibrate.component';
import { MainComponent } from './main/main.component';
import { RegOneComponent } from './reg-one/reg-one.component';
import { RegPopupComponent } from './reg-popup/reg-popup.component';
import { RegTwoComponent } from './reg-two/reg-two.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepStaticticComponent } from './step-statictic/step-statictic.component';
import { StepTwoLeftThreeLeftComponent } from './step-two-left-three-left/step-two-left-three-left.component';
import { StepTwoLeftComponent } from './step-two-left/step-two-left.component';
import { StepTwoRightThreeLeftComponent } from './step-two-right-three-left/step-two-right-three-left.component';
import { StepTwoRightComponent } from './step-two-right/step-two-right.component';
import { SystemComponent } from './system.component';

const routes: Routes = [
  {
    path: '', component: SystemComponent, children: [
      { path: '', component: MainComponent },
      { path: 'collibrate', component: CollibrateComponent },
      { path: 'auth-one', component: AuthOneComponent },
      { path: 'auth-two', component: AuthTwoComponent },
      { path: 'reg-one', component: RegOneComponent },
      { path: 'reg-two', component: RegTwoComponent },
      { path: 'reg-popup', component: RegPopupComponent },
      { path: 'step-one', component: StepOneComponent },
      { path: 'step-two-left', component: StepTwoLeftComponent },
      { path: 'step-two-right', component: StepTwoRightComponent },
      { path: 'step-two-left-three-left', component: StepTwoLeftThreeLeftComponent },
      { path: 'step-two-right-three-left', component: StepTwoRightThreeLeftComponent },
      { path: 'step-statictic', component: StepStaticticComponent },
      { path: 'face-det', component: FaceDetComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
