import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Notebook} from '../notes/model/notebook';
import {Note} from '../notes/model/note';
import {FeedbackViewModel} from '../feedback/feedback.component';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
private BASE_URL = 'http://localhost:8082/api/';

private ALL_NOTEBOOKS_URL = `${this.BASE_URL}/notebooks/all`;
private SAVE_UPDATE_NOTEBOOK_URL = `${this.BASE_URL}/notebooks`;
private SEND_FEEDBACK_URL = `${this.BASE_URL}/feedback`;
private DELETE_NOTEBOOK_URL =`${this.BASE_URL}/notebooks/`;
private ALL_NOTES_URL =`${this.BASE_URL}/notes/all`;
private SAVE_UPDATE_NOTE_URL =`${this.BASE_URL}/notes`;
private NOTES_BYNOTEBOOK_URL =`${this.BASE_URL}\\notes\\byNotebook\\`;
private DELETE_NOTE_URL =`${this.BASE_URL}\\notes\\`;

  constructor(private http : HttpClient) {}

getAllNotebooks(): Observable<Notebook[]>
{
  return this.http.get<Notebook[]>(this.ALL_NOTEBOOKS_URL);
}

getAllNotes(): Observable<Note[]>
{
  return this.http.get<Note[]>(this.ALL_NOTES_URL);
}

getNotesByNotebook(nbId: String): Observable<Note[]>
{
  return this.http.get<Note[]>(this.NOTES_BYNOTEBOOK_URL+nbId);
}

postFeedback(feedback : FeedbackViewModel) : Observable<any>
{
  return this.http.post(this.SEND_FEEDBACK_URL,feedback);
}

postNotebook(nb : Notebook) : Observable<Notebook>
{
  return this.http.post<Notebook>(this.SAVE_UPDATE_NOTEBOOK_URL,nb);
}

postNote(note : Note) : Observable<Note>
{
  return this.http.post<Note>(this.SAVE_UPDATE_NOTE_URL,note);
}

deleteNotebook(id: String): Observable<any>
{
  return this.http.delete(this.DELETE_NOTEBOOK_URL + id);
}

  deleteNote(idNote : string): Observable<any>
  {
    return this.http.delete(this.DELETE_NOTE_URL + idNote);
  }


}
