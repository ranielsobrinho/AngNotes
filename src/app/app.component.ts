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
      title: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(60),
        Validators.required
      ])],
      content: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(90),
        Validators.required
      ])]
    });

    this.load();
  }

  // Add new note
  add(): any {
    const content: string = this.form.controls.content.value;
    const title: string = this.form.controls.title.value;
    const id: number = this.notes.length + 1;
    this.notes.push(new Note(id, title, content));
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
  changeMode(mode: string): any {
    this.mode = mode;
  }
}
