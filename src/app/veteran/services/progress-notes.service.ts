import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ProgressNotesService {
  constructor(private http: HttpClient) {}

  getNotes() {
    return this.http.get('./assets/mock/progressNote.json');
  }

  postNotes(note: any) {
    return this.http.post<any>('./assets/mock/progressNote.json', note);
  }
}
