import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/shared/notes.service';
import { Note } from 'src/models/notes.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  public notes: Note[] = [];

  constructor(private notesService: NotesService) { }

  ngOnInit(): any {
    // retrieve all notes from NotesService
    this.notes = this.notesService.getAll();
  }

}
