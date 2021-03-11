import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment'
import { Diary } from 'src/app/_utils/interfaces';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  isEmojiOpen = false;
  message: string;
  data: Diary[] = [];

  @ViewChild('messageInput', {static: false}) messageElement: ElementRef;
  constructor(
  ) { }

  ngOnInit(): void {
  }

  addEmoji(event: any): void {
    this.message = `${this.message}${event.emoji.native}`;
    this.isEmojiOpen = false;
    this.messageElement.nativeElement.focus();
  }

  onSubmit(): void {
    this.data.push({
      message: this.message,
      date: moment().format('ll'),
      time: moment().format('LT')
    });
  }
}
