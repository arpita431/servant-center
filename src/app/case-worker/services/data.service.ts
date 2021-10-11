import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  public msgData:any;
  getName() {
    return this.http.get('./assets/mock/userData.json');
  }
  getMsgCount() {
    return this.http.get('./assets/mock/msgs.json');
  }

}
