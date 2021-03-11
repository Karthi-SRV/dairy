import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryRoutingModule } from './diary-routing.module';
import { DiaryComponent } from './diary.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { PickerModule } from '@ctrl/ngx-emoji-mart'


@NgModule({
  declarations: [DiaryComponent],
  imports: [
    CommonModule,
    DiaryRoutingModule,
    SharedModule,
    PickerModule,
  ]
})
export class DiaryModule { }
