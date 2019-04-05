import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StepsPage } from './steps.page';

const routes: Routes = [
  {
    path: '',
    component: StepsPage,
    children : [
      { path: 'step1', children: [{path: '', loadChildren: './step1/step1.module#Step1PageModule' }]},
      { path: 'step2', children: [{path: '', loadChildren: './step2/step2.module#Step2PageModule'}] },
      { path: 'step4', children: [{path: '', loadChildren: './step4/step4.module#Step4PageModule'}] },
      { path: 'step5', children: [{path: '', loadChildren: './step5/step5.module#Step5PageModule'}] },
      { path: 'step6', children: [{path: '', loadChildren: './step6/step6.module#Step6PageModule'}] },
      { path: 'step7', children: [{path: '', loadChildren: './step7/step7.module#Step7PageModule'}] },
      { path: 'step8', children: [{path: '', loadChildren: './step8/step8.module#Step8PageModule' }] },
      { path: 'step9', children: [{path: '', loadChildren: './step9/step9.module#Step9PageModule' }] },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StepsPage]
})
export class StepsPageModule {}
