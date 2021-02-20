import { Component } from '@angular/core';
import { Note } from 'src/models/notes.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {  } from '@fontawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngNotes';
  public notes: Note[] = [];
  public mode = 'list';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      content: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.load();
  }

  // Add new note
  add(): void {
    const content = this.form.controls.content.value;
    const id = this.notes.length + 1;
    this.notes.push(new Note(id, content));
    this.save();
    this.clear();
  }
  // Clear the form
  clear(): void {
    this.form.reset();
  }
  // Remove note
  remove(note: Note): void {
    const index = this.notes.indexOf(note);
    if (index !== -1){
      this.notes.splice(index, 1);
      this.save();
    }
  }
  // Saving on localstorage
  save(): void {
    const data = JSON.stringify(this.notes);
    localStorage.setItem('notes', data);
    this.mode = 'list';
  }
  // Loading notes list
  load(): any {
    const data = localStorage.getItem('notes');
    if (data) {
      this.notes = JSON.parse(data);
    } else {
      this.notes = [];
    }
  }
  // Swipe modes
  changeMode(mode): any {
    this.mode = mode;
  }
}
