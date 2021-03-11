import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Diary } from 'src/app/_utils/interfaces';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  openEmoji = false;
  message: string;
  history: Diary[];
  @ViewChild('diaryForm', {static: false}) diaryForm: NgForm;
  @ViewChild('messageInput', {static: false}) messageInput: ElementRef;
  constructor(
  ) {
  }

  ngOnInit(): void {
    this.history = [];
  }

  addEmoji(event: any): void {
    this.message = `${this.message ? this.message : ''}${event.emoji.native}`;
    this.openEmoji = false;
    this.messageInput.nativeElement.focus();
  }

  addMessage(): void {
    let data: Diary[] = this.history;
    data.push({
      message: this.message,
      date: moment().format('ll'),
      time: moment().format('LT'),
      dateTime: moment().format()
    });
    data = _.orderBy(data, ['dateTime'], ['desc']);
    this.history = data;
    this.diaryForm.resetForm();
  }
}
