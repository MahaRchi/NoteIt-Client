import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Notebook} from './model/notebook';
import {Note} from './model/note';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

notebooks : Notebook[] = [];
notes : Note[] = []
selectedNoteBook : Notebook;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.getAllNotebooks();
    this.getAllNotes();
  }

public getAllNotebooks()
{
  this.apiService.getAllNotebooks().subscribe(

    res => {this.notebooks = res;},
    err => {alert('An error was occured')}
  );

}

createNotebook()
{
  let newNb: Notebook = {
    name:'test',
    id: null,
    nbNotes: 0
  }

  this.apiService.postNotebook(newNb).subscribe(

    res => {
      newNb.id = res.id;
      this.notebooks.push(newNb);
    },
    err => {alert('An error was occured')}
  );

}

updateNotebook(updatedNbk: Notebook)
{
  this.apiService.postNotebook(updatedNbk).subscribe(

    res => {
      console.log("updated")
    },
    err => {alert('An error was occured')}
  );
}

deleteNotebook(notebook : Notebook){

  if(confirm("Are u sure u want to delete?")){
    this.apiService.deleteNotebook(notebook.id).subscribe(
      res => {
        let indexOfNotebook = this.notebooks.indexOf(notebook);
        this.notebooks.splice(indexOfNotebook,1);

      };
      err => {alert("could not delete");}
    )
  }
}

getAllNotes()
{
  this.apiService.getAllNotes().subscribe(
    res => {this.notes = res;},
    err => {alert('An error was occured');}
  )
}

deleteNote(note : Note)
{

}

createNote(notebookId : string){
  let newNote : Note = {

    id: null,
    title:"New Note",
    text: "tester le texte",
    lastModifiedOn: null,
    notebookId: notebookId
  };

  this.apiService.postNote(newNote).subscribe(
    res => {
      newNote.id = res.id;
      this.notes.push(newNote);


    },
    err => {alert('An error was occured while saving note');}
  );
}

selectNotebook(notebook : Notebook){
  this.selectedNoteBook = notebook;
  console.log( this.selectedNoteBook);
  this.apiService.getNotesByNotebook(this.selectedNoteBook.id).subscribe(
    res => {

      this.notes=res;

    },
    err => {alert("eerror while grabing note by notebook");}
  );
}
}
