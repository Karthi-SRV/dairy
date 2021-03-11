import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog.component';
import { SharedModule } from '../shared.module';
// tslint:disable-next-line: nx-enforce-module-boundaries


@NgModule({
  declarations: [
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [DeleteDialogComponent],
  exports: [
    DeleteDialogComponent
  ]
})
export class DeleteDialogModule { }
