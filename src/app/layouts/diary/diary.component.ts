import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import * as _ from 'lodash';
import { CommonService } from 'src/app/_core/services/common.service';
import { Diary } from 'src/app/_utils/interfaces';
import {MatDialog} from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/_shared/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  isEmojiOpen = false;
  message: string;
  history: Diary[];
  @ViewChild('diaryForm', {static: false}) diaryForm: NgForm;
  @ViewChild('messageInput', {static: false}) messageElement: ElementRef;
  constructor(
    private commonService: CommonService,
    public matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getDiaryHistory();
  }

  addEmoji(event: any): void {
    this.message = `${this.message ? this.message : ''}${event.emoji.native}`;
    this.isEmojiOpen = false;
    this.messageElement.nativeElement.focus();
  }

  onSubmit(): void {
    const response = this.commonService.getLocalStorageData('diary');
    const data: Diary[] = response ? response : [];
    data.push({
      message: this.message,
      date: moment().format('ll'),
      time: moment().format('LT'),
      dateTime: moment().format()
    });
    this.commonService.setLocalStorage('diary', data);
    this.getDiaryHistory();
    this.diaryForm.resetForm();
  }

  getDiaryHistory(): void {
    const response = this.commonService.getLocalStorageData('diary');
    let data: Diary[] = response ? response : [];
    data = _.orderBy(data, ['dateTime'], ['desc']);
    this.history = data;
  }

  clearAllData(): void {
    this.commonService.setLocalStorage('diary', []);
    this.getDiaryHistory();
  }

  deleteConfirmation(): void {
    const dialogRef = this.matDialog.open(DeleteDialogComponent, {
      width: '460px',
      height: 'auto',
      disableClose: true
    });
    dialogRef.componentInstance.title = 'Would you like to delete all the records ?';
    dialogRef.componentInstance.message = `Once record is deleted can't be restored`;
    dialogRef.componentInstance.acceptance = `Delete`;
    dialogRef
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.clearAllData();
        }
      });
  }
}
