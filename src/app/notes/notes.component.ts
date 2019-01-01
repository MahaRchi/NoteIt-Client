import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Notebook} from './model/notebook';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

notebooks : Notebook[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.getAllNotebooks();
  }

public getAllNotebooks()
{
  this.apiService.getAllNotebooks().subscribe(

    res => {this.notebooks = res},
    err => {alert('An error was occured')}
  );

}

}
