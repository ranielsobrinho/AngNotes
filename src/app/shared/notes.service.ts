import { Injectable } from '@angular/core';
import { Note } from 'src/models/notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();

  constructor() { }

  get(id: number): any {
    return this.notes[id];
  }

  getId(note: Note): any {
    return this.notes.indexOf(note);
  }

  add(note: Note): any {
    // save a note in the array and returns the id of the note
    const newLength = this.notes.push(note);
    const index = newLength - 1;
    return index;
  }

  update(id: number, title: string, body: string): void {
    const note = this.notes[id];
    note.title = title;
    note.body = body;
  }

  delete(id: number): any {
    this.notes.splice(id, 1);
  }
}
