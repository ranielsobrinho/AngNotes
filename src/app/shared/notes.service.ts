import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/models/notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notes: Note[] = [];

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  get(id: number): any {
    return this.notes[id];
  }

  getId(note: Note): any {
    return this.notes.indexOf(note);
  }

  getAll(): any {
    return this.load();
  }

  add(title: string, body: string): any {
    // save a note in the array and returns the id of the note
    const newLength = this.notes.push(new Note(title, body));
    const index = newLength - 1;
    this.save();
    return index;
  }

  update(id: number, title: string, body: string): void {
    const note = this.notes[id];
    note.title = title;
    note.body = body;
    this.save();
  }

  delete(id: number): any {
    this.notes.splice(id, 1);
    this.save();
  }

  save(): void {
    const data = JSON.stringify(this.notes);
    localStorage.setItem('notes', data);
  }

  load(): any {
    const data = localStorage.getItem('notes');
    if (data) {
      return this.notes = JSON.parse(data);
    } else{
      return this.notes = [];
    }
  }
}
