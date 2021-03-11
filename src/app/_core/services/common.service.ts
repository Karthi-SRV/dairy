
import { Inject, Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Diary } from 'src/app/_utils/interfaces';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  constructor(
  ) { }

  public getLocalStorageData(name: string): Diary[] {
    const response = localStorage.getItem(name);
    return JSON.parse(response);
  }

  public setLocalStorage(name: string, data: any): Diary[] {
    localStorage.setItem(name, JSON.stringify(data));
    return this.getLocalStorageData(name);
  }

}
